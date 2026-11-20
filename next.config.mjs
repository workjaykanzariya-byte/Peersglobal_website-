/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'dev.peersunity.com' },
      { protocol: 'https', hostname: 'peersunity.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/animations/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/storage/:path*',
        destination: 'https://peersunity.com/storage/:path*',
      },
      {
        source: '/leadership/nomination/:id/live-votes',
        destination: 'https://peersunity.com/leadership/nomination/:id/live-votes',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/leadership/campaigns',
        destination: '/leadership/nominate',
        permanent: false,
      },
      {
        source: '/leadership/campaigns/:id/nominate',
        destination: '/leadership/nominate',
        permanent: false,
      },
      {
        source: '/leadership/campaigns/:id/winners',
        destination: '/leadership/nominate',
        permanent: false,
      },
      {
        source: '/leadership/elections',
        destination: '/leadership/nominate',
        permanent: false,
      },
    ]
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig

