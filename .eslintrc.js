module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["prettier/vue", "airbnb-base", "plugin:vue/recommended"],
  rules: {
    "no-alert": "off",
    "no-confirm": "off",
    "no-restricted-globals": "off",
    // 'comma-dangle': 'off',
    "no-plusplus": "off",
    "no-console": "off",
    // 'class-methods-use-this': 'off',
    "import/no-unresolved": "off",
    // 'import/extensions': 'off',
    "implicit-arrow-linebreak": "off",
    // 'import/prefer-default-export': 'off',
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        ignores: [],
      },
    ],
    "vue/multiline-html-element-content-newline": "off",
  },
};
