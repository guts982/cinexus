/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            // port: '',
            // pathname: '/*',
          },
          {
            protocol: 'https',
            hostname: '*.amitkarn.com.np',
          },
          {
            protocol: 'https',
            hostname: '*.com  ',
          },
        ],
        // domains:["image.tmdb.org"],
      },
}

module.exports = nextConfig
