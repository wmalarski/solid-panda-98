import typescript from "@rollup/plugin-typescript";
import withSolid from "rollup-preset-solid";

export default withSolid([
	{
		input: "src/index.tsx",
		targets: ["esm", "cjs"],
	},
	{
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
		plugins: [typescript()],
	},
]);
