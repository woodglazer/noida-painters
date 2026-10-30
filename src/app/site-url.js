export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.noidapainters.com";

export function getSiteUrl() {
  return SITE_URL;
}
