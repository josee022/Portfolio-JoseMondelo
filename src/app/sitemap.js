import { SITE_URL } from "@/content/site";

export default function sitemap() {
  const languages = { es: `${SITE_URL}/es`, en: `${SITE_URL}/en` };
  return ["es", "en"].map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
