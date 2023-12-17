/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `http://localhost:8000/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
