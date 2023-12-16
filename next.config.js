/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {};
module.exports = nextConfig;
module.exports = withNextIntl({
  // Other Next.js configuration ...
});
