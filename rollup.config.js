import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue2'

export default {
  external: ['prismjs', 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'],
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/vue-prism.js',
    globals: {
      'prismjs': 'Prism'
    }
  },
  plugins: [
    commonjs(),
    vue({
      compileTemplate: false
    })
  ]
}
