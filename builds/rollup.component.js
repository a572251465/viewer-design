import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import vue from 'rollup-plugin-vue'

const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes('@viewer'))
export default inputs.map((name) => {
  const pckName = name.split('@viewer')[1]
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: 'es',
      file: `lib/${pckName}/index.js`
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false
          },
          exclude: ['node_modules']
        }
      })
    ],
    external(id) {
      return /^vue/.test(id) || /^@viewer/.test(id)
    }
  }
})
