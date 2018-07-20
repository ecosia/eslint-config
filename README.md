# [ESLint](https://eslint.org) config ✅

Shareable [ESLint](https://eslint.org) configuration. See instructions how to [install and use ESLint](./eslint.md).

## Install

With NPM:

```
$ npm i --save-dev eslint@^4.19.1 eslint-config-airbnb-base@^12.1.0 eslint-plugin-import@^2.12.0 eslint-plugin-vue@^4.5.0 @ecosia/eslint-config
```

or Yarn:

```
$ yarn add --dev eslint@^4.19.1 eslint-config-airbnb-base@^12.1.0 eslint-plugin-import@^2.12.0 eslint-plugin-vue@^4.5.0 @ecosia/eslint-config
```

## Usage

Extends your project's ESLint config with the Ecosia one as follows:

```
{
  "extends": "@ecosia"
}
```

### [Vue.js](https://vuejs.org)

If you want to lint your [Vue.js](https://vuejs.org), only extends the appropriate one:

```
{
  "extends": "@ecosia/eslint-config/vue"
}
```
