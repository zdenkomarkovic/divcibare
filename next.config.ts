import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode za React - hvata potencijalne probleme ranije
  reactStrictMode: true,

  // Optimizacija slika - dodaj domene po potrebi
  images: {
    remotePatterns: [
      // Primer:
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  // Headers za bolju sigurnost
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
