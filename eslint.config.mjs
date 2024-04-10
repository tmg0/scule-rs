import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'index.d.ts',
    'index.js',
    'rustfmt.toml',
    '.github/**/*',
    'npm/**/package.json',
  ],
})
