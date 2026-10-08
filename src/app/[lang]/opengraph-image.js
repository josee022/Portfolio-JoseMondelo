import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getDict } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "José Mondelo, desarrollador full-stack";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

// Satori necesita la fuente en TTF: se pide a Google Fonts solo con los caracteres que se usan.
async function loadFont(text, weight) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@${weight}&text=${encodeURIComponent(text)}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OgImage({ params }) {
  const { lang } = await params;
  const t = getDict(lang);
  const read = async (f) => `data:image/png;base64,${(await readFile(join(process.cwd(), "public/og", f))).toString("base64")}`;
  const tags = "Flutter, Firebase, AWS, React, Next.js";
  const allText = `JM José Mondelo Álvarez ${t.meta.ogTitle} ${t.meta.ogSubtitle} ${tags}`;
  const [agenda, chat, bold, regular] = await Promise.all([read("agenda.png"), read("chat.png"), loadFont(allText, 700), loadFont(allText, 400)]);
  const fonts = [
    bold && { name: "Bricolage", data: bold, weight: 700, style: "normal" },
    regular && { name: "Bricolage", data: regular, weight: 400, style: "normal" },
  ].filter(Boolean);
  const font = fonts.length > 0;

  const phone = (src, extra) => ({
    display: "flex",
    width: 230,
    height: 498,
    padding: 9,
    borderRadius: 40,
    background: "#0d0f10",
    boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
    ...extra,
  });

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0b0d0e", color: "#f1f3f4", fontFamily: font ? "Bricolage" : "sans-serif", fontWeight: 400, padding: "70px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", width: 600, justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", width: 56, height: 56, borderRadius: 14, background: "#f1f3f4", color: "#0b0d0e", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700, fontFamily: font ? "Bricolage" : "sans-serif" }}>JM</div>
            <div style={{ display: "flex", fontSize: 26, color: "#c4cacf" }}>José Mondelo Álvarez</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", fontFamily: font ? "Bricolage" : "sans-serif", fontSize: 56, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2 }}>
              {t.meta.ogTitle.split(", ").map((line) => (
                <span key={line} style={{ whiteSpace: "nowrap" }}>
                  {line}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 30, lineHeight: 1.35, color: "#c4cacf" }}>{t.meta.ogSubtitle}</div>
          </div>
          <div style={{ display: "flex", gap: 14, fontSize: 22, color: "#8c959c" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", width: 12, height: 12, borderRadius: 6, background: "#f6c945" }} />
              {tags}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 70, top: 60, display: "flex" }}>
          <div style={phone(chat, { marginTop: 70, marginRight: -40, transform: "rotate(-6deg)" })}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={chat} width={212} height={480} style={{ borderRadius: 32, objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div style={phone(agenda, { transform: "rotate(4deg)" })}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={agenda} width={212} height={480} style={{ borderRadius: 32, objectFit: "cover", objectPosition: "top" }} />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
