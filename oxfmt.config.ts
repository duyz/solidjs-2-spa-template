import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["node_modules/**", "dist/**", "build/**", "public/**"],
  printWidth: 80,
  sortImports: {
    newlinesBetween: false,
    customGroups: [
      {
        groupName: "solidjs",
        elementNamePattern: ["solid-js"],
      },
      {
        groupName: "solidjs-lib",
        elementNamePattern: ["@solidjs/**"],
      },
    ],
    groups: [
      "type-builtin",
      "type-external",
      ["type-internal", "type-subpath"],
      ["type-parent", "type-sibling", "type-index"],
      "builtin",
      "solidjs",
      "solidjs-lib",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "style",
      "unknown",
    ],
  },
  sortTailwindcss: {
    functions: ["cn", "clsx"],
    attributes: ["class", "classList"],
  },
});
