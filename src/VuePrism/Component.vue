<template>
	<pre v-bind:class="codeClass"><code v-bind:class="codeClass" v-html="highlightedCode"></code></pre>
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
			},
			pluginConfig () {
				return this.plugins || {};
			}
		},
		methods: {
			normalizeWhitespace (code) {
				if (this.pluginConfig.whitespace) {
					const normalizer = new Normalizer(this.pluginConfig.whitespace);
					return normalizer.normalize(code);
				}
				return code;
			}
		}
	}
</script>
