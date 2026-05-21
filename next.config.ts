import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Ensure static files are served correctly
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // Remove basePath and assetPrefix for root deployment
  // basePath: '/Portfolio',
  // assetPrefix: '/Portfolio',
  
  // Optimize JavaScript compilation and remove legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? {
      properties: ['^data-testid$']
    } : false,
  },
  
  // Modern JavaScript compilation targeting modern browsers
  experimental: {
    // optimizeCss: true, // Disabled - requires critters package
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-hot-toast'],
  },

  // Turbopack is default in Next.js 16; declare it to avoid webpack config conflict warning
  turbopack: {},

  // Generate service worker for offline support
  generateBuildId: async () => {
    // Use current date-time for unique build IDs
    return `build-${Date.now()}`
  },
  
  // Webpack optimizations for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize chunk splitting for better caching and tree shaking
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            default: false,
            vendors: false,
            // Framework libraries
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Animation libraries
            animations: {
              chunks: 'all',
              name: 'animations',
              test: /[\\/]node_modules[\\/](framer-motion|@tsparticles)[\\/]/,
              priority: 30,
              enforce: true,
            },
            // UI libraries
            ui: {
              chunks: 'all',
              name: 'ui',
              test: /[\\/]node_modules[\\/](lucide-react|react-hot-toast|next-themes)[\\/]/,
              priority: 25,
              enforce: true,
            },
            // Common vendor code
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20
            },
            common: {
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true
            }
          }
        }
      };
      
      // Enable tree shaking for specific packages - removed problematic framer-motion alias
    }
    
    // Module resolution optimizations
    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];
    
    return config;
  },
  
  // Note: Headers are not compatible with static export (output: 'export')
  // Cache headers will need to be configured at the web server level
};

export default nextConfig;
