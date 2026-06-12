/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Permitir imágenes externas si las usas
  },
};

export default nextConfig;