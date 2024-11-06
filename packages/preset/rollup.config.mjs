import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig({
	input: "src/index.ts",
	output: [
		{
			format: "esm",
			file: "dist/index.module.js",
			sourcemap: true,
		},
		{
			format: "commonjs",
			file: "dist/index.common.js",
			sourcemap: true,
		},
	],
	plugins: [typescript()],
});
