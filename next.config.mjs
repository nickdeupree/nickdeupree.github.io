/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    images: {
      unoptimized: true,
    },
    // Enable build caching
    experimental: {
      turbotrace: {
        logLevel: 'error',
      },
    },
  };
  
  export default nextConfig;