import { defineRecipe } from "@pandacss/dev";

export const textarea = defineRecipe({
	className: "textarea",
	description: "Styles for the Textarea component",
	base: {
		padding: "3px 4px",
		border: "none",
		boxShadow: "{borders.border-field}",
		backgroundColor: "{colors.button-highlight}",
		appearance: "none",
		borderRadius: 0,

		_disabled: {
			backgroundColor: "{colors.surface}",
		},

		_focus: {
			outline: "none",
		},
	},
});
