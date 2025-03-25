import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
        search: "",
      },
    ],
  },
  async headers() {
    return [
      {
        /**
         * Returns an array of objects that define headers for all routes.
         * The source specifies that headers should be applied to all routes.
         * The headers are defined in the `securityHeaders` constant.
         */
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://assets.aceternity.com https://va.vercel-scripts.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://vercel.live;
    img-src * blob: data: https://assets.aceternity.com;
    media-src 'none';
    connect-src *;
    font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com https://use.typekit.net https://p.typekit.net https://fonts.google.com/;
    frame-src 'self' https://vercel.live;
    object-src 'self' data:;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  }, // mozliwe usuniecie tego
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];
