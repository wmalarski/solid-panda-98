import { defineConfig } from "@pandacss/dev";
import { sp98Preset } from "src/preset";

export default defineConfig({
	presets: ["@pandacss/dev/presets", sp98Preset],
	preflight: true,
	outExtension: "mjs",
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: { extend: {} },
	outdir: "../generated",
	importMap: {
		css: "@sp98/styled-system/css",
		recipes: "@sp98/styled-system/recipes",
		patterns: "@sp98/styled-system/patterns",
		jsx: "@sp98/styled-system/jsx",
	},
	jsxFramework: "solid",
	syntax: "object-literal",
});
