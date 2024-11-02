const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');
const {sassPlugin} = require("esbuild-sass-plugin")
const postcssPlugin = require("@deanc/esbuild-plugin-postcss");

esbuild.build({
  entryPoints: ['./src/content.jsx'],
  bundle: true,
  // outfile: './dist/content.js',
  platform: 'browser',
  target: ['chrome58'],
  minify: true,
  logLevel: 'info',
  outdir: 'dist', 
  // inject: ['./src/app.css'], 
  plugins: [
    postcssPlugin({
      plugins: [require('tailwindcss'), require('autoprefixer')], // PostCSS with Tailwind
    }),
    sassPlugin({type: "style"}),
],
  loader: { 
    '.js': 'jsx',  // Handle JSX files
    '.css': 'file',  // Emit CSS files
    '.png': 'file',  // Emit PNG images
  },
  external: [],  // Ensure no imports are accidentally marked as external
  sourcemap: true,
  logLevel: 'info',
}).catch(() => process.exit(1));
