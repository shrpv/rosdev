/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        
        return config
    },
    compiler: {
        reactRemoveProperties: true,
        /* removeConsole: {
            exclude: ['error'],
        }, */
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "export"
};

export default nextConfig;
