import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
	className: "button",
	description: "Styles for the Button component",
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		border: "none",
		color: "transparent",
		textShadow: "0 0 {colors.text-color}",
		background: "{colors.surface}",
		boxShadow: "{borders.border-raised-outer}, {borders.border-raised-inner}",
		borderRadius: 0,

		fontFamily: "sans-serif, Arial",
		WebkitFontSmoothing: "none",
		fontSize: "11px",

		minWidth: "75px",
		minHeight: "23px",
		padding: "0 12px",

		_active: {
			boxShadow: "{borders.border-sunken-outer}, {borders.border-sunken-inner}",
			textShadow: "1px 1px {colors.text-color}",
		},

		_hover: {
			boxShadow: "{borders.border-sunken-outer}, {borders.border-sunken-inner}",
		},

		_focus: {
			outline: "1px dotted #000000",
			outlineOffset: "-4px",
		},

		_focusInner: {
			border: 0,
		},

		_disabled: {
			textShadow: "1px 1px 0 {colors.button-highlight}",
		},
	},
	variants: {
		variant: {
			default: {
				boxShadow:
					"{borders.default-button-border-raised-outer}, {borders.default-button-border-raised-inner}",

				_active: {
					boxShadow:
						"{borders.default-button-border-sunken-outer}, {borders.default-button-border-sunken-inner}",
				},
			},
		},
	},
	defaultVariants: {
		variant: "default",
	},
});
