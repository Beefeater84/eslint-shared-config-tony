This is a unified ESLint config created based on recommendations and represents a build used by large companies

## Installation

View peerDependencies

```console
npm info "eslint-shared-config-tony@latest" peerDependencies
```

Install the package

```console
npm install --save-dev eslint-shared-config-tony
```

Install dependencies

```console
npx install-peerdeps --dev eslint-shared-config-tony
```

Connect ESLint settings to the file .eslintrc.js
If it's not there, create it in the root of the project
If it's named .eslintrc.json, rename it to .eslintrc.js

```js
    const sharedConfig = require("eslint-shared-config-tony");

module.exports = {
    ...sharedConfig,
}
```

If you want to overwrite something

```js
    module.exports = {
    ...sharedConfig,
    extends: [
        ...sharedConfig.extends,
        "pluginName",
    ],
}

```

Package author: https://www.linkedin.com/in/tony-myasoedov-b145801b3/

## Links

You can find a large number of builds that are constantly updated here: https://github.com/dustinspecker/awesome-eslint


