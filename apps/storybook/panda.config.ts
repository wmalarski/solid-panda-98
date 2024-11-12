import { defineConfig } from "@pandacss/dev";
import { sp98Preset } from "@sp98/ui/preset";

export default defineConfig({
	presets: [sp98Preset],
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
