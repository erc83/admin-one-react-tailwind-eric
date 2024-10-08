/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',                                         --> solo si se sirve en un sitio statico
  basePath: "/admin-one-react-tailwind",
  async redirects() {                                       --> configuracion_deploy
    return [
      {
        source:'/',
        destination: '/admin-one-react-tailwind',
        basePath: false,
        permanent: false
      }
    ]
  },
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