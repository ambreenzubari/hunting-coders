// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public', // This is where the service worker will be generated
    register: true,
    skipWaiting: true,
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
    // Other Next.js configurations here
  });
  