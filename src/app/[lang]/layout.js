import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { getDict, isLang } from "@/content";
import { languages, person, SITE_URL } from "@/content/site";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
// La monoespaciada solo aparece en el diagrama de arquitectura: no hace falta precargarla.
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap", preload: false });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

// Fija el tema antes de pintar para que no haya parpadeo. Sigue al sistema hasta que el usuario elige.
const themeScript = `(function(){try{var d=document.documentElement,s=localStorage.getItem('theme'),m=matchMedia('(prefers-color-scheme: dark)');function a(){d.dataset.theme=(s==='light'||s==='dark')?s:(m.matches?'dark':'light')}a();m.addEventListener&&m.addEventListener('change',function(){s=localStorage.getItem('theme');a()})}catch(e){document.documentElement.dataset.theme='light'}})()`;

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0e" },
  ],
  colorScheme: "light dark",
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: person.shortName,
    authors: [{ name: person.name, url: SITE_URL }],
    creator: person.name,
    keywords: ["José Mondelo", "Flutter", "Firebase", "full-stack", "Dart", "Next.js", "React", "KNC", "developer", "desarrollador"],
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      type: "profile",
      firstName: "José",
      lastName: "Mondelo Álvarez",
      locale: t.locale,
      alternateLocale: lang === "es" ? "en_GB" : "es_ES",
      url: `/${lang}`,
      siteName: person.name,
      title: t.meta.ogTitle,
      description: t.meta.description,
    },
    twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.description },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} ${bricolage.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
