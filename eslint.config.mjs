import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const airbnbConfig = compat
  .extends("airbnb")
  .map((config) =>
    Object.fromEntries(
      Object.entries(config).filter(([key]) => key !== "plugins"),
    ),
  );

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...airbnbConfig,
  ...compat.extends("prettier"),
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      camelcase: "off",
      "no-undef": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        { ts: "never", tsx: "never" },
      ],
    },
  },
  {
    files: ["eslint.config.mjs"],
    rules: {
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
