import type { Config, Preset } from "@pandacss/types";
import { globalCss } from "./global-styles";
import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";
import { tokens } from "./tokens";

const defineConfig = <T extends Config>(config: T) => config;

export const sp98Preset = defineConfig<Preset>({
	name: "sp98Preset",
	globalCss,
	theme: {
		extend: {
			tokens,
			recipes,
			slotRecipes,
		},
	},
});
