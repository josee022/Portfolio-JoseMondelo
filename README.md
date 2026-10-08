# Portfolio de José Mondelo

Portfolio personal en español e inglés: [portfolio-jose-mondelo.vercel.app](https://portfolio-jose-mondelo.vercel.app).

Hecho con Next.js 16 (App Router, páginas estáticas), React 19 y Tailwind CSS 4. Se despliega en Vercel al subir cambios a `main`.

## Comandos

```bash
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # compilación de producción
npm run lint    # ESLint
npm run cv      # genera public/cv/CV_JoseMondelo_{ES,EN}.pdf (antes: npm run build)
```

`npm run cv` arranca la web en el puerto 3123 e imprime `/es/cv` y `/en/cv` con Chrome en modo headless. Si Chrome no está en la ruta habitual, indica otra con `CHROME_PATH`.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Textos en español e inglés (web y CV) | `src/content/es.js`, `src/content/en.js` |
| Enlaces, proyectos, capturas y rutas de los CV | `src/content/site.js` |
| Página principal | `src/app/[lang]/page.js` |
| CV imprimible (fuente de los PDF) | `src/app/[lang]/cv/page.js` |
| Metadatos, fuentes y tema claro/oscuro | `src/app/[lang]/layout.js` |
| Imagen para redes sociales | `src/app/[lang]/opengraph-image.js` |
| Sitemap y robots | `src/app/sitemap.js`, `src/app/robots.js` |
| Resumen para herramientas de IA | `public/llms.txt` |
| Componentes | `src/components/` |
| Colores, tipografía y animaciones | `src/app/globals.css` |

Al cambiar un texto del CV en `es.js` o `en.js`, vuelve a ejecutar `npm run build && npm run cv` para regenerar los PDF.

## Capturas de KNC

Todas las capturas de `public/knc/` son de centros de demostración con datos ficticios, sacadas de los tours públicos. No se publican datos reales de centros, familias ni menores.
