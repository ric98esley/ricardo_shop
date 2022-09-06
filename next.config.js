/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://ricardodev.com',
  //       permanent: true,
  //     },
  //   ];
  // },
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },
};

module.exports = nextConfig;
