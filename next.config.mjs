/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: ["placehold.co", "plchldr.co"],
    }
};

export default nextConfig;
