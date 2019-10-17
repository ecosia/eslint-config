# [ESLint](https://eslint.org) config ✅

Shareable [ESLint](https://eslint.org) configuration. See instructions how to [install and use ESLint](./eslint.md).

## Install

With yarn:

```sh
yarn add --dev @ecosia/eslint-config
```

or npm:

```sh
npm i --save-dev @ecosia/eslint-config
```

## Usage

Extends your project's ESLint config with the Ecosia one as follows:

```json
{
  "extends": "@ecosia"
}
```

### [Vue.js](https://vuejs.org)

If you want to lint your [Vue.js](https://vuejs.org), extends your project's ESLint config with Ecosia Vue.js one instead:

```json
{
  "extends": "@ecosia/eslint-config/vue"
}
```
