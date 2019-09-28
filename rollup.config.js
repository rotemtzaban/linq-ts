import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';
import { module, main } from './package.json';

/** @type {import('rollup').RollupWatchOptions} */
const config = {
    input: './src/index.ts',
    output: [
        {
            format: 'es',
            file: module,
            exports: 'named'
        },
        {
            format: 'umd',
            name: 'Linq',
            file: main,
            exports: 'named'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        sourcemaps(),
        cleanup()
    ],
    treeshake: true
};

export default config;
