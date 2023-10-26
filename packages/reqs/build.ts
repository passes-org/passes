await Bun.build({
  entrypoints: ['./src/index.ts', './src/pass-engines/index.ts'],
  outdir: './dist',
});
