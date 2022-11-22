/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['components', 'domain', 'pages', 'styles']
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH
  }
}

module.exports = nextConfig
