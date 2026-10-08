import Image from "next/image";

// Marco de móvil dibujado con CSS. Las capturas de los tours miden 1170 x 2532 (iPhone).
export function Phone({ src, alt, priority = false, sizes = "(min-width: 1024px) 300px, 60vw", className = "", children }) {
  return (
    <div
      className={`relative aspect-[1170/2532] rounded-[2.6rem] bg-[#0d0f10] p-[0.55rem] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45),inset_0_0_0_1px_rgb(255_255_255/0.08)] ring-1 ring-black/10 dark:ring-white/10 ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white">
        {children ?? <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />}
      </div>
    </div>
  );
}

// Marco de tablet. Las capturas del panel miden 2049 x 1536.
export function Tablet({ src, alt, priority = false, sizes = "(min-width: 1024px) 720px, 92vw", className = "", children }) {
  return (
    <div
      className={`relative aspect-[2049/1536] rounded-[1.6rem] bg-[#0d0f10] p-[0.7rem] shadow-[0_30px_60px_-24px_rgb(0_0_0/0.4),inset_0_0_0_1px_rgb(255_255_255/0.08)] ring-1 ring-black/10 dark:ring-white/10 sm:rounded-[2rem] sm:p-[0.9rem] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-white sm:rounded-[1.2rem]">
        {children ?? <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />}
      </div>
    </div>
  );
}
