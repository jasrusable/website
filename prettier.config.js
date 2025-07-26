/** @type {import('prettier').Config} */
const config = {
  // Print formatting
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,

  // Semicolons and quotes
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",

  // JSX formatting
  jsxSingleQuote: false,

  // Trailing commas
  trailingComma: "es5",

  // Spacing
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",

  // Line endings
  endOfLine: "lf",

  // Formatting rules for specific file types
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "always",
      },
    },
    {
      files: "*.{json,jsonc}",
      options: {
        printWidth: 120,
      },
    },
  ],
};

export default config;
