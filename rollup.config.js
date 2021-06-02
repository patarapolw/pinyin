import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const getConfig = ({ output, isMinify }) => ({
    input: "src/index.js",
    output: {
        file: output,
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        ...(isMinify
            ? [
                terser(),
            ]
            : []),
    ],
});


export default [
    getConfig({ output: 'lib/index.mjs' }),
    getConfig({ output: 'lib/index.min.mjs', isMinify: true })
]