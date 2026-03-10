import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      boundaries,
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["entities", "./src/entities"],
            ["features", "./src/features"],
            ["core", "./src/core"],
            ["app", "./src/app"],
          ],
          extensions: [".js", ".jsx"],
        },
      },

      "boundaries/elements": [
        { type: "core", pattern: "src/core/**" },
        { type: "entities", pattern: "src/entities/**" },
        { type: "features", pattern: "src/features/**" },
        { type: "app", pattern: "src/app/**" },
      ],
    },
    rules: {
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^[A-Z_]" },
      ],
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "entities", allow: ["core"] },
            { from: "features", allow: ["core", "entities"] },
            { from: "app", allow: ["core", "entities", "features"] },
          ],
        },
      ],
    },
  },
]);
