import Prism from 'prismjs';

export default {
	update: (el, binding) => {
		const { arg, modifiers } = binding;
		el.innerHTML = Prism.highlight(el.innerHTML, Prism.languages[arg]);
	}
}
