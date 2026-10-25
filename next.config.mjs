/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    // Only public aliases with known routing; Amvera probe settings are separate.
    return ["www.goryacheva.online", "elena-goryacheva.vercel.app"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host.replace(/\./g, "\\.") }],
      destination: "https://goryacheva.online/:path*",
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
