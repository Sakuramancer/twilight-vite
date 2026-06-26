import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

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
      boundaries.configs.recommended,
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
      "boundaries/root-path": resolve(__dirname),
      "import/resolver": {
        alias: {
          map: [
            ["shared", "./src/shared"],
            ["entities", "./src/entities"],
            ["features", "./src/features"],
            ["widgets", "./src/widgets"],
            ["pages", "./src/pages"],
            ["app", "./src/app"],
          ],
          extensions: [".js", ".jsx"],
        },
      },

      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/**" },
        // @x-импорты выделяем в отдельный тип — он должен идти ПЕРЕД entities
        { type: "entities-x", pattern: "src/entities/*/@x/**" },
        { type: "entities", pattern: "src/entities/**" },
        { type: "features", pattern: "src/features/*/**" },
        { type: "widgets", pattern: "src/widgets/**" },
        { type: "pages", pattern: "src/pages/**" },
        { type: "app", pattern: "src/app/**" },
      ],
    },
    rules: {
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^[A-Z_]" },
      ],
      "boundaries/no-unknown": "error",
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "shared", allow: [] },
            { from: "entities-x", allow: ["shared", "entities"] },
            { from: "entities", allow: ["shared", "entities-x"] },
            { from: "features", allow: ["shared", "entities-x", "entities"] },
            {
              from: "widgets",
              allow: ["shared", "entities-x", "entities", "features"],
            },
            {
              from: "pages",
              allow: [
                "shared",
                "entities-x",
                "entities",
                "features",
                "widgets",
              ],
            },
            {
              from: "app",
              allow: [
                "shared",
                "entities-x",
                "entities",
                "features",
                "widgets",
                "pages",
              ],
            },
          ],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^entities\\/[^/]+\\/(?!@x\\/).*",
              message:
                "Use public API (entities/*) or @x notation (entities/*/@x/*)",
            },
            {
              group: ["features/*/*/*"],
              message: "Use public API (features/*/*)",
            },
            {
              group: ["widgets/*/*"],
              message: "Use public API (widgets/*)",
            },
            {
              group: ["pages/*/*"],
              message: "Use public API (pages/*)",
            },
          ],
        },
      ],
    },
  },
]);
