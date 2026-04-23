/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.icarcdn.com' },
      { protocol: 'https', hostname: 'automobiles.honda.com' },
      { protocol: 'https', hostname: 'www.d-max.isuzu-trucks.com' },
      { protocol: 'https', hostname: 'vehicle-images.carscommerce.inc' },
      { protocol: 'https', hostname: 'mg-upload.sgp1.cdn.digitaloceanspaces.com' },
      { protocol: 'https', hostname: 'platform.cstatic-images.com' },
      { protocol: 'https', hostname: 'itp1.itopfile.com' },
      { protocol: 'https', hostname: 'www.ncxhonda.com' },
    ],
  },
};

export default nextConfig;