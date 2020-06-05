# VuePrism
![Vue Prism](vue-prism.png)

**Install**
```
npm install --save prismjs @aminoeditor/vue-prism
```

**Add to vue**
*main.js*
```
import Vue from 'vue';
import VuePrism from '@aminoeditor/vue-prism';

Vue.use(VuePrism);

// the rest of main.js below
```

## _Component_
```
<template>
	<prism language="css" :code="code"></prism>
</template>

<script>
// you can import the language libs you need from
// prismjs here...or pretty much anywhere in your app
import  'prismjs/themes/prism.css';

export default {
	data () {
		return {
			code: 'body { background: blue; }'
		}
	  }
}
</script>
```

## _Directive_
```
<code v-prism:css>body { background: blue; }</code>
```

## _Plugin Support_
**Normalize Whitespace** _(component only)_
```
<template>
	<prism language="css" :code="code" :pluginConfigs="pluginConfigs"></prism>
</template>

<script>
import 'prismjs/themes/prism.css';

export default {
	data () {
		return {
			code: 'body { background: blue; }',
			pluginConfigs: {
				whitespace: {
					'remove-trailing': true,
					'remove-indent': true,
					'left-trim': true,
					'right-trim': true,
					'break-lines': 80,
					'indent': 1,
					'remove-initial-line-feed': false,
					'tabs-to-spaces': 4,
					'spaces-to-tabs': 4
				}
			}
		}
	}
}
</script>
```
