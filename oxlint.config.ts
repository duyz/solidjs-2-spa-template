import solid from "eslint-plugin-solid/configs/v2";
import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["oxc", "import", "typescript", "unicorn"],
  jsPlugins: ["eslint-plugin-solid"],
  ignorePatterns: ["node_modules/**", "dist/**", "build/**", "public/**"],
  categories: { correctness: "error" },
  settings: solid.settings,
  rules: solid.rules,
  env: { builtin: true },
});
