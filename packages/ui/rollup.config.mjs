import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import withSolid from "rollup-preset-solid";
import tailwindcss from "tailwindcss";

export default withSolid([
	{
		input: "src/index.tsx",
		targets: ["esm", "cjs"],
	},
	{
		input: "src/styles.css",
		output: { file: "dist/styles.css" },
		plugins: [
			postcss({
				plugins: [autoprefixer(), tailwindcss()],
				extract: true,
				minimize: true,
			}),
		],
	},
	{
		name: "preset",
		input: "src/preset/index.ts",
		output: [
			{
				format: "esm",
				file: "dist/preset/index.module.js",
				sourcemap: true,
			},
			{
				format: "commonjs",
				file: "dist/preset/index.common.js",
				sourcemap: true,
			},
		],
	},
]);
