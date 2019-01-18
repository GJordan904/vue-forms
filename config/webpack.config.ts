import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as GeneratePackageJsonPlugin from 'generate-package-json-webpack-plugin';
import { join } from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

function resolve(dir: string) {
  return join(__dirname, '..', dir);
}

const basePackageValues = {
  name: 'vue-forms',
  version: '1.0.0',
  main: './index.js',
};

const versionsPackageFilename = resolve('package.json');

const cleanOptions = {
  root:     resolve(''),
  verbose:  true,
  dry:      false,
};

const conf: Configuration = {
  mode: 'production',

  target: 'web',

  devtool: false,

  entry: {
    index: resolve('src/index.ts'),
    validation: resolve('src/validation.ts'),
    forms: resolve('src/forms.ts'),
    fields: resolve('src/fields.ts'),
  },

  output: {
    path: resolve('build'),
    filename: '[name].js',
    library: ['vueForms', '[name]'],
    libraryTarget: 'umd',
  },

  externals: 'vue',

  stats: {
    colors: true,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },

  resolve: {
    extensions: ['.ts'],
    alias: {
      joi: 'joi-browser',
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader',
      },
      {
        test: /\.ts$/,
        exclude: [/(node_modules)|(\.d\.ts)/],
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },

  node: {
    Buffer: true,
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin('build', cleanOptions),
    new BundleAnalyzerPlugin(),
    new GeneratePackageJsonPlugin(basePackageValues, versionsPackageFilename),
  ],
};

export default conf;
