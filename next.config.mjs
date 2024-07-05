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
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_APP_CLIENT_ID: process.env.GOOGLE_APP_CLIENT_ID,
    GOOGLE_APP_CLIENT_SECRET: process.env.GOOGLE_APP_CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

export default nextConfig;
