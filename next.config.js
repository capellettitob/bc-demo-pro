const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin Turbopack to this project so it ignores stray lockfiles in $HOME.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;
