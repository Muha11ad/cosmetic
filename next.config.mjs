/** @type {import('next').NextConfig} */
import svg from '@neodx/svg/webpack';

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.plugins.push(
                svg({
                    group: true,
                    root: 'src/shared/ui/icon/assets',
                    output: 'public/sprite',
                    exclude: ['path/to/icon.svg', /[a-z]*-colored\.svg$/],
                    include: ['path/to/other-icon.svg' /* ... */],
                    resetColors: false,
                    metadata: 'src/shared/ui/icon/sprite.h.ts',
                })
            );
        }
        return config;
    }
};

export default nextConfig;
