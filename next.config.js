/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  ...nextConfig
})
