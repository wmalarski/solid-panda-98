import { defineConfig } from "@pandacss/dev";
import { sp98Preset } from "@sp98/ui/preset";

export default defineConfig({
	presets: ["@pandacss/dev/presets", sp98Preset],

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@sp98/ui/dist/panda.buildinfo.json",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: { extend: {} },
	jsxFramework: "solid",

	// The output directory for your css system
	outdir: "../../packages/generated",
	importMap: {
		css: "@sp98/styled-system/css",
		recipes: "@sp98/styled-system/recipes",
		patterns: "@sp98/styled-system/patterns",
		jsx: "@sp98/styled-system/jsx",
	},
});
