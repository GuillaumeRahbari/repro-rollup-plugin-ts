import ts from "@wessberg/rollup-plugin-ts";

import { main } from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: main,
      format: "es",
    },
  ],
  plugins: [ts()],
};
