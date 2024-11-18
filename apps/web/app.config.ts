import { defineConfig } from "@solidjs/start/config";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	ssr: false,
	vite: {
		plugins: [visualizer({ open: true })],
	},
});
