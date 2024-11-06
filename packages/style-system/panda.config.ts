import { defineConfig } from "@pandacss/dev";
import { sp98Preset } from "@sp98/preset";

export default defineConfig({
	presets: [sp98Preset],
	outdir: "styled-system",
	jsxFramework: "solid",
});
