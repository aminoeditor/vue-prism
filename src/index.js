import { Component, Directive } from "./VuePrism";

export default {
	install(Vue, options) {
		Vue.component("prism", Component);
		Vue.directive("prism", Directive);
	}
};

export { Component as VuePrismComponent }
export { Directive as VuePrismDirective }
