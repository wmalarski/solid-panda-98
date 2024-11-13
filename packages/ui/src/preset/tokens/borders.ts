import { defineTokens } from "@pandacss/dev";

export const borders = defineTokens.borders({
	/* Borders */
	"border-width": { value: "1px" },
	"border-raised-outer": {
		value:
			"inset -1px -1px {colors.window-frame}, inset 1px 1px {colors.button-highlight}",
	},
	"border-raised-inner": {
		value:
			"inset -2px -2px {colors.button-shadow}, inset 2px 2px {colors.button-face}",
	},
	"border-sunken-outer": {
		value:
			"inset -1px -1px {colors.button-highlight}, inset 1px 1px {colors.window-frame}",
	},
	"border-sunken-inner": {
		value:
			"inset -2px -2px {colors.button-face}, inset 2px 2px {colors.button-shadow}",
	},
	"default-button-border-raised-outer": {
		value:
			"inset -2px -2px {colors.window-frame}, inset 1px 1px {colors.window-frame}",
	},
	"default-button-border-raised-inner": {
		value:
			"inset 2px 2px {colors.button-highlight}, inset -3px -3px {colors.button-shadow}, inset 3px 3px {colors.button-face}",
	},
	"default-button-border-sunken-outer": {
		value:
			"inset 2px 2px {colors.window-frame}, inset -1px -1px {colors.window-frame}",
	},
	"default-button-border-sunken-inner": {
		value:
			"inset -2px -2px {colors.button-highlight}, inset 3px 3px {colors.button-shadow}, inset -3px -3px {colors.button-face}",
	},

	/* Window borders flip button-face and button-highlight */
	"border-window-outer": {
		value:
			"inset -1px -1px {colors.window-frame}, inset 1px 1px {colors.button-face}",
	},
	"border-window-inner": {
		value:
			"inset -2px -2px {colors.button-shadow}, inset 2px 2px {colors.button-highlight}",
	},

	/* Field borders (checkbox, input, etc) flip window-frame and button-shadow */
	"border-field": {
		value:
			"inset -1px -1px {colors.button-highlight}, inset 1px 1px {colors.button-shadow}, inset -2px -2px {colors.button-face}, inset 2px 2px {colors.window-frame}",
	},

	/* Tabs */
	"border-tab": {
		value:
			"inset -1px 0 {colors.window-frame}, inset 1px 1px {colors.button-face}, inset -2px 0 {colors.button-shadow}, inset 2px 2px {colors.button-highlight}",
	},
});
