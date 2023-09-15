/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fog-of-war.s3.ap-northeast-2.amazonaws.com",
      "tripsketchbucket.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
