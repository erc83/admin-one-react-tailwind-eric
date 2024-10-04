/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig