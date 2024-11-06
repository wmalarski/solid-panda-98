import pandaPreset from "@pandacss/preset-panda";
import type { Config } from "@pandacss/types";
import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";
import { tokens } from "./tokens";

const defineConfig = <T extends Config>(config: T) => config;

export const shadowPandaPreset = defineConfig({
	presets: [pandaPreset],
	theme: {
		extend: {
			tokens,
			recipes,
			slotRecipes,
		},
	},
});

export default shadowPandaPreset;
