module.exports = {
  // Disable all Prettier rules and formatting
  semi: false,
  trailingComma: 'none',
  singleQuote: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',

  // Disable Prettier for all file types
  overrides: [
    {
      files: '*',
      options: {
        parser: 'none',
      },
    },
  ],
};
