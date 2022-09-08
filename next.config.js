/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false
});

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

module.exports = withPWA(nextConfig) ;
