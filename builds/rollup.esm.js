import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import vue from 'rollup-plugin-vue'

export default {
  input: path.resolve(__dirname, '../packages/viewer-design/index.ts'),
  output: {
    format: 'es',
    file: 'lib/index.esm.js'
  },
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser'
    }),
    typescript({
      tsconfigOverride: {
        exclude: [
          'node_modules',
          'story'
        ]
      }
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}
