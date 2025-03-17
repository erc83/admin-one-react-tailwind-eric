import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  basePath: "",
/*  async redirects() {
    return [
      {
        source: "/",
        destination: 'admin-one-react-tailwind-eric',
        basePath: false,
        permanent: false
      }
    ]
  },*/
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig