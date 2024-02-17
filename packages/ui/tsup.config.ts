import { defineConfig, Options } from "tsup"

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/index.tsx"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}))
