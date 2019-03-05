# [ESLint](https://eslint.org) config ✅

Shareable [ESLint](https://eslint.org) configuration. See instructions how to [install and use ESLint](./eslint.md).

## Install

With yarn:

```bash
yarn add --dev eslint@^5.14.1 eslint-config-airbnb-base@^13.1.0 eslint-plugin-import@^2.12.0 @ecosia/eslint-config
```

or npm:

```bash
npm i --save-dev eslint@^5.14.1 eslint-config-airbnb-base@^13.1.0 eslint-plugin-import@^2.12.0 eslint-plugin-vue@^5.2.2 @ecosia/eslint-config
```

## Usage

Extends your project's ESLint config with the Ecosia one as follows:

```json
{
  "extends": "@ecosia"
}
```

### [Vue.js](https://vuejs.org)

If you want to lint your [Vue.js](https://vuejs.org), also install `eslint-plugin-vue` with yarn:

```bash
yarn add --dev eslint-plugin-vue@^5.2.2
```

or npm:

```bash
npm i --save-dev eslint-plugin-vue@^5.2.2
```

and extends your project's ESLint config with Ecosia Vue.js one:

```json
{
  "extends": "@ecosia/eslint-config/vue"
}
```
