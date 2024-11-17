import { defineSlotRecipe } from "@pandacss/dev";

export const titleBar = defineSlotRecipe({
	className: "title-bar",
	description: "Styles for the Title Bar component",
	slots: ["container", "text", "controls", "control"],
	base: {
		container: {
			background:
				"linear-gradient(90deg, {colors.dialog-blue}, {colors.dialog-blue-light})",
			padding: "3px 2px 3px 3px",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		},
		text: {
			fontWeight: "bold",
			color: "white",
			letterSpacing: 0,
			marginRight: "24px",
			lineHeight: 0,
		},
		controls: {
			display: "flex",
		},
		control: {
			padding: 0,
			display: "block",
			minWidth: "16px",
			minHeight: "14px",

			"& svg": {
				width: "16px",
				height: "16px",
				strokeWidth: "3px",
				padding: "2px",
			},

			_active: {
				padding: 0,
			},

			_focus: {
				outline: "none",
			},
		},
	},
	variants: {
		inactive: {
			true: {
				container: {
					background:
						"linear-gradient(90deg, {colors.dialog-gray}, {colors.dialog-gray-light})",
				},
			},
		},
	},
	defaultVariants: {
		inactive: false,
	},
});
