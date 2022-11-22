/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'styles']
  },
}

module.exports = nextConfig
