import type { NextConfig } from "next";
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // Dev mode-e PWA off thakbe
  register: true,
  setupExitNotifications: true,
});

const nextConfig: NextConfig = {
  /* Tomar onno config thakle ekhane dibe */
};

export default withPWA(nextConfig);