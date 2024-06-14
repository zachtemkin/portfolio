module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  plugins: ["css-modules", "scss"],
  rules: {
    "scss/order/properties-alphabetical-order": true,
  },
};
