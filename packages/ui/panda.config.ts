import { defineConfig } from "@pandacss/dev";
import { sp98Preset } from "src/preset";

export default defineConfig({
	presets: [sp98Preset],
	preflight: true,
	outExtension: "mjs",
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: { extend: {} },
	outdir: "../generated",
	importMap: {
		css: "@sp98/ui/css",
		recipes: "@sp98/ui/recipes",
		patterns: "@sp98/ui/patterns",
		jsx: "@sp98/ui/jsx",
	},
	jsxFramework: "solid",
});
