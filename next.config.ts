import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  outputFileTracingIncludes: {
    "/api/cv-request": ["./private/cv/kinon-jones-cv.pdf"],
  },
};

export default nextConfig;
