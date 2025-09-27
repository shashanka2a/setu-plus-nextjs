/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: '/Users/shashankjagannatham/Downloads/setu-plus-nextjs',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
