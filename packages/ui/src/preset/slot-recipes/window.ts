import { defineSlotRecipe } from "@pandacss/dev";

export const window = defineSlotRecipe({
	className: "window",
	description: "Styles for the Window component",
	slots: ["root", "body"],
	base: {
		root: {
			boxShadow: "{borders.border-window-outer}, {borders.border-window-inner}",
			background: "{colors.surface}",
			padding: "3px",
		},
		body: {
			margin: "{colors.element-spacing}",
		},
	},
});
