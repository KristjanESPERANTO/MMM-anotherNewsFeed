import css from "@eslint/css"
import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import markdown from "@eslint/markdown"
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
  {
    files: ["**/*.css"],
    language: "css/css",
    extends: [css.configs.recommended],
  },
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [js.configs.recommended, stylistic.configs.recommended],
    rules: {
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: { sourceType: "module" },
  },
  {
    files: ["**/*.md"],
    extends: [markdown.configs.recommended],
    language: "markdown/gfm",
  },
])
