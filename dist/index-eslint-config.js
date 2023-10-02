module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:sonarjs/recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "plugins": [
        "import",
        "sonarjs",
        "prettier",
        "@typescript-eslint"
    ],
    "settings": {
        "typescript": true,
        "node": true
    },
    "rules": {
        "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", ".ts", ".tsx"]}],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "import/no-extraneous-dependencies": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "no-plusplus": ["error", {"allowForLoopAfterthoughts": true}],
        "no-undef": "off"
    },

}