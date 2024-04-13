/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fog-of-war.s3.ap-northeast-2.amazonaws.com",
      "tripsketchbucket.s3.ap-northeast-2.amazonaws.com",
      "github.com",
      "www.notion.so",
      "file.notion.so",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
