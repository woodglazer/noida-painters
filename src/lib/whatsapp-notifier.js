"server-only";

import { getDatabaseClient } from "./db";

export async function sendLeadWhatsAppNotification({ name, phone, service, message, city }) {
  try {
    const sql = getDatabaseClient();
    const rows = await sql`
      SELECT 
        site_name, 
        whatsapp_notify_enabled, 
        whatsapp_notify_number, 
        whatsapp_notify_api_key, 
        whatsapp_notify_template
      FROM site_settings
      WHERE city = ${city}
      LIMIT 1
    `;

    const settings = rows[0];
    if (!settings || !settings.whatsapp_notify_enabled) {
      return;
    }

    const targetNumber = (settings.whatsapp_notify_number || "919717256514").replace(/[^\d]/g, "");
    const cityName = city === "noida" ? "Noida Painters" : "Gurgaon Painters";

    const text = (settings.whatsapp_notify_template || "")
      .replace("{city_name}", cityName)
      .replace("{name}", name)
      .replace("{phone}", phone)
      .replace("{service}", service)
      .replace("{message}", message || "None");

    console.log(`[WhatsApp Lead Alert] -> Sending to ${targetNumber} for ${cityName}:`, text);

    const apiKeyOrWebhook = (settings.whatsapp_notify_api_key || "").trim();
    if (apiKeyOrWebhook.startsWith("http://") || apiKeyOrWebhook.startsWith("https://")) {
      await fetch(apiKeyOrWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: targetNumber,
          customer_name: name,
          customer_phone: phone,
          service,
          message,
          city,
          formatted_message: text,
        }),
      });
    }
  } catch (error) {
    console.error("Failed to send WhatsApp notification:", error?.message || error);
  }
}
