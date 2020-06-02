<template>
	<pre>
		<code v-bind:class="codeClass" v-html="highlightedCode"></code>
	</pre>
</template>

<script>
	import Prism from 'prismjs';
	import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
	export default {
		data () {
			return {
				instance: Prism
			}
		},
		props: [
			'code',
			'language',
			'plugins'
		],
		computed: {
			highlightedCode () {
				return this.instance.highlight(this.normalizeWhitespace(this.code), this.instance.languages[this.language]);
			},
			codeClass () {
				return 'language-' + this.language
			}
		},
		methods: {
			normalizeWhitespace (code) {
				if (plugins.whitespace) {
					const normalizer = new Normalizer(plugins.whitespace);
					return normalizer.normalize(code);
				}
				return code;
			}
		}
	}
</script>
