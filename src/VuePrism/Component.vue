<template>
	<pre>
		<code v-bind:class="codeClass" v-html="highlightedCode"></code>
	</pre>
</template>

<script>
	import Prism from 'prismjs';
	export default {
		data () {
			return {
				instance: Prism
			}
		},
		props: [
			'code',
			'language'
		],
		computed: {
			highlightedCode () {
				console.log(this.$el);
				return this.instance.highlight(this.code, this.instance.languages[this.language]);
			},
			codeClass () {
				return 'language-' + this.language
			}
		}
	}
</script>
