import pandaPreset from "@pandacss/preset-panda";
import type { Config, Preset } from "@pandacss/types";
import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";
import { tokens } from "./tokens";

const defineConfig = <T extends Config>(config: T) => config;

export const sp98Preset = defineConfig<Preset>({
	name: "sp98Preset",
	presets: [pandaPreset],
	theme: {
		extend: {
			tokens,
			recipes,
			slotRecipes,
		},
	},
});
