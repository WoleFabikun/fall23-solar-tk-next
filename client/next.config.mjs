/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/search_query',
        destination: 'http://localhost:8080/search_query',
      },
      {
        source: '/api/search_video',
        destination: 'http://localhost:8080/search_video',
      },
    ];
  },
};

export default nextConfig;