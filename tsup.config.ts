import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    splitting: true,
    treeshake: true,
    clean: true,
    outDir: "dist",
  },
  {
    entry: {
      "web-components": "src/web-component.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    splitting: false,
    treeshake: true,
    outDir: "dist",
  },
]);
