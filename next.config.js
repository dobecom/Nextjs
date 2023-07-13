/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:3301/:path*',
            },
        ]
    }
}

module.exports = nextConfig
