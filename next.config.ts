import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tnctrack.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
