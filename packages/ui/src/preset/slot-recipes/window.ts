import { defineSlotRecipe } from "@pandacss/dev";

export const window = defineSlotRecipe({
	className: "window",
	description: "Styles for the Window component",
	slots: ["container", "body"],
	base: {
		container: {
			boxShadow: "{borders.border-window-outer}, {borders.border-window-inner}",
			background: "{colors.surface}",
			padding: "3px",
		},
		body: {
			margin: "{colors.element-spacing}",
		},
	},
});
