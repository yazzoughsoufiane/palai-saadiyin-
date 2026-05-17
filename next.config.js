/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/palai-saadiyin-',
  assetPrefix: '/palai-saadiyin-',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/palai-saadiyin-',
  },
}

module.exports = nextConfig
