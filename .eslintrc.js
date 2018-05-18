module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": "webpack",
  },
  "rules": {
    "semi": [ 2, "never" ],
    "react/jsx-filename-extension": 0,
    "react/jsx-curly-spacing": [ 2, "always" ],
  },
}