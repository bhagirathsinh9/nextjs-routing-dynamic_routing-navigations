/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
   images: {
    domains: ['encrypted-tbn0.gstatic.com','store.storeimages.cdn-apple.com','m.media-amazon.com',"sm.pcmag.com"],
  }
};

export default nextConfig;
