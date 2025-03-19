import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcssPresetEnv from 'postcss-preset-env';
import { addDirective } from 'rollup-plugin-add-directive';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import { visualizer } from 'rollup-plugin-visualizer';

import concat from './rollup-plugin-concat.mjs';

/** @type {import('rollup').RollupOptions} */
const options = [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'esm',
      sourcemap: false,
      inlineDynamicImports: true,
    },
    plugins: [
      json(),
      scss({
        fileName: 'globals.css',
        exclude: ['/**/*.module.scss'],
        failOnError: true,
        verbose: true,
        outputStyle: 'compressed',
      }),
      peerDepsExternal(),
      resolve({ browser: true }),
      commonjs(),
      typescript(),
      terser({
        compress: {
          directives: false,
        },
      }),
      postcss({
        extract: 'modules.css',
        modules: true,
        syntax: 'postcss-scss',
        minimize: true,
        plugins: [
          postcssPresetEnv({
            stage: 3,
            features: {
              'nesting-rules': true,
            },
          }),
        ],
      }),
      concat({
        files: ['./dist/globals.css', './dist/modules.css'],
        outputFile: './dist/styles.css',
      }),
      visualizer(),
      addDirective(),
    ],
  },
  {
    input: './src/utils/index.ts',
    output: {
      file: './dist/utils/index.js',
      format: 'esm',
      sourcemap: false,
      inlineDynamicImports: true,
    },
    plugins: [peerDepsExternal(), resolve({ browser: true }), commonjs(), typescript(), terser()],
  },
];

export default options;
