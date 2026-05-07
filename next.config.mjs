/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/palai-saadiyin-',
  assetPrefix: '/palai-saadiyin-/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig