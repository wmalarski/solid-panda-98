import * as checkbox from "./checkbox";
import * as dialog from "./dialog";
import * as field from "./field";
import * as titleBar from "./title-bar";
import * as window from "./window";

export const slotRecipes = {
	...dialog,
	...checkbox,
	...field,
	...titleBar,
	...window,
};
