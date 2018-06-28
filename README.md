# ESLint config ✅

Shareable ESLint configuration. See instructions how to [install and use ESLint](./eslint.md).

## Install

```
npm i --save-dev @ecosia/eslint-config
```

## Usage

Extends your project's ESLint config with the Ecosia one as follows:

```
{
  "extends": "@ecosia"
}
```

### Vue.js

If you want to lint your Vue.js, only extends the appropriate one:

```
{
  "extends": "@ecosia/eslint-config/vue"
}
```
