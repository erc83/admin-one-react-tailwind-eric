/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',                                         --> solo si se sirve en un sitio statico
  basePath: "/admin-one-react-tailwind",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.dicebear.com',
      },
    ],
  },
}

export default nextConfig