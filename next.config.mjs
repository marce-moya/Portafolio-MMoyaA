/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portafolio-MMoyaA/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/Portafolio-MMoyaA' : '',
  };
  
  module.exports = nextConfig;
