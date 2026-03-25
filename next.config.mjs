import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.pexels.com"},
                        {hostname: "pexels.com"}
        ],
    },
};

export default nextConfig;
