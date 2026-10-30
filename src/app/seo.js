export const BRAND_NAME = "Noida Painters";
export const DEFAULT_PAGE_TITLE = "Painters in Noida | Noida Painters";
export const DEFAULT_PAGE_DESCRIPTION =
  "Professional painters in Noida for high-rise flats, villas, builder floors and commercial spaces. Interior, exterior, textures and waterproofing. Free site visit.";

export function createSeoMetadata({
  title,
  description,
  openGraph,
  twitter,
  ...rest
}) {
  const resolvedTitle = title || DEFAULT_PAGE_TITLE;
  const resolvedDescription = description || DEFAULT_PAGE_DESCRIPTION;

  return {
    title: {
      default: resolvedTitle,
      template: `%s | ${BRAND_NAME}`,
    },
    description: resolvedDescription,
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      siteName: BRAND_NAME,
      locale: "en_IN",
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      ...twitter,
    },
    ...rest,
  };
}
