import "server-only";
import { getDatabaseClient } from "@/lib/db";

const fallbackArticles = [
  {
    id: "fallback-choose-paint-finish",
    slug: "choose-paint-finish-for-each-room",
    category: "Interior planning",
    title: "How to choose the right paint finish for each room",
    seoTitle: "Choosing Paint Finishes in Noida | Noida Painters",
    description:
      "Choose a paint finish by balancing how a room is used, wall condition, appearance, and the product's care instructions.",
    body: `Paint finish affects how a wall reflects light and how visible small surface marks may be. Before choosing a sheen, consider how the room is used, the wall's condition, and the finish recommended for the paint product. There is no single finish that is right for every room.`,
    paragraphs: [
      "Paint finish affects how a wall reflects light and how visible small surface marks may be.",
    ],
    checks: [
      "Decide how often the wall will be touched or cleaned.",
      "Check the product label for recommended surfaces and care guidance.",
    ],
    image: "/images/service-interior.webp",
    imageAlt: "Freshly painted home interior",
    published: true,
    city: "noida",
    createdAt: "2026-10-26T06:45:17.928Z",
    updatedAt: "2026-10-26T06:45:17.928Z",
  },
];

function toArticle(row) {
  const body = row.body || "";
  const checks = row.checks || "";

  return {
    id: row.id,
    slug: row.slug,
    category: row.category,
    title: row.title,
    seoTitle: row.seo_title,
    description: row.description,
    body: body,
    paragraphs: body.split(/\n\s*\n/).filter(Boolean),
    checks: checks.split("\n").filter(Boolean),
    image: row.image,
    imageAlt: row.image_alt,
    published: row.published,
    city: row.city || "noida",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getPublishedBlogPosts() {
  "use cache";
  try {
    const sql = getDatabaseClient();
    const rows = await sql`
      SELECT id, slug, category, title, seo_title, description, body, checks,
        image, image_alt, published, city, created_at, updated_at
      FROM blog_posts
      WHERE published = true AND LOWER(COALESCE(city, 'noida')) = 'noida'
      ORDER BY created_at DESC
    `;

    return rows.length > 0 ? rows.map(toArticle) : fallbackArticles;
  } catch (error) {
    return fallbackArticles;
  }
}

export async function getPublishedBlogPost(slug) {
  try {
    const sql = getDatabaseClient();
    const rows = await sql`
      SELECT id, slug, category, title, seo_title, description, body, checks,
        image, image_alt, published, city, created_at, updated_at
      FROM blog_posts
      WHERE slug = ${slug} 
        AND published = true
        AND LOWER(COALESCE(city, 'noida')) = 'noida'
      LIMIT 1
    `;

    if (rows[0]) {
      return toArticle(rows[0]);
    }
  } catch (error) {
    // fallback
  }

  return fallbackArticles.find((article) => article.slug === slug) || null;
}
