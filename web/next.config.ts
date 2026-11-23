import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Lets a Cloudflare quick tunnel load dev assets during `next dev`. */
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
