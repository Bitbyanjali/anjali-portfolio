import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "simpleicons.org" },
      { protocol: "https", hostname: "www.svgrepo.com" },
      { protocol: "https", hostname: "th.bing.com" },
    ],
  },
};

export default nextConfig;
