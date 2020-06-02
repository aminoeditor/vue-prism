# VuePrism

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

**Usage**
*******
_Component_
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
_Directive_
```
<code v-prism:css>body { background: blue; }</code>
```
