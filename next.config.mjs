/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      MONGODBURL: "mongodb+srv://shahnisarg39:mlBJQXGZuhLkUSmN@cluster0.9m3wtvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    },
    output : 'export' ,
    // distDir: "out",
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
