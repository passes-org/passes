import dts from 'bun-plugin-dts'

// Build ESM
await Bun.build({
  entrypoints: ['./src/index.ts', './src/pass-engines.ts'],
  outdir: './dist',
  plugins: [dts()],
});
