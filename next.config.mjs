/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      // Enlaces antiguos al CV (versiones anteriores del portfolio y del PDF).
      { source: "/docs/:file*", destination: "/cv/CV_JoseMondelo_ES.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
