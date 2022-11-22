/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_ASSET_PREFIX,
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'styles']
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
    NEXT_ASSET_PREFIX: process.env.NEXT_ASSET_PREFIX
  }
}

module.exports = nextConfig
