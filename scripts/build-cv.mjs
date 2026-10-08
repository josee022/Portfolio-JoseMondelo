// Genera los PDF del CV (ES y EN) a partir de la ruta /[lang]/cv con Chrome en modo headless.
// Uso: npm run build && npm run cv
// Si Chrome no está en la ruta habitual, indica otra con CHROME_PATH.
import { spawn, execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const PORT = 3123;
const OUT = resolve("public/cv");
const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("No encuentro Chrome. Indica la ruta con CHROME_PATH.");
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
const isWin = process.platform === "win32";
const server = spawn(isWin ? "npx.cmd" : "npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore", shell: isWin });

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/es/cv`);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("El servidor no arrancó. ¿Has ejecutado npm run build?");
}

try {
  await waitForServer();
  for (const lang of ["es", "en"]) {
    const file = resolve(OUT, `CV_JoseMondelo_${lang.toUpperCase()}.pdf`);
    execFileSync(
      chrome,
      ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=8000", `--print-to-pdf=${file}`, `http://localhost:${PORT}/${lang}/cv`],
      { stdio: "ignore", timeout: 60000 }
    );
    console.log(`CV generado: ${file}`);
  }
} finally {
  if (isWin) {
    try {
      execFileSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {}
  } else {
    server.kill();
  }
}
