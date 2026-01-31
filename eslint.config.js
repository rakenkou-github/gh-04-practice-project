import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules", "dist"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react/react-in-jsx-scope": "off",
      "semi": ["error", "always"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
