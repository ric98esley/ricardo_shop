/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue'
  },
  basePath: '/dist',
  compress: true,
  async redirects(){
    return[
      {
        sourse: '/hola',
        destunation: 'ricardodev.com',
        permanent: true
      }]
  },
  swcMinify: true,
}

module.exports = nextConfig
