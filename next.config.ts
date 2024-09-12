import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

let nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
};

const withNextIntl = createNextIntlPlugin()
nextConfig = withNextIntl(nextConfig)

export default nextConfig;
