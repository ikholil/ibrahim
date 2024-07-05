/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themeforest.img.customer.envatousercontent.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
