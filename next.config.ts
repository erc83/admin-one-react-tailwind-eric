import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
        output: 'export',
        images: {
          unoptimized: true,
          /* remotePatterns: [
            {
              protocol: 'https',
              hostname: 'static.justboil.me',
            },
          ], */
        },
        basePath: "/admin-one-react-tailwind-eric",
        trailingSlash: true
}

export default nextConfig