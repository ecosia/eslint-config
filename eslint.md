# [ESLint](https://eslint.org)

## About

ESLint is a linter for different types of languages, mostly used (and with the largest support) for JavaScript language. It enforces best practices, helps maintaining a consistent code style across the entire codebase and automatically fix errors when needed.

## Globally or locally installed?

While having a global version installed works just fine for generic Node scripts and small projects with little collaboration and testing needed, it is often recommended to install a local version. The main reasons are the following:

- Different projects might require different ESLint versions: some default rules configurations depend on the version and are subject to change, revision and deprecation
- Relying on globally installed binaries in CI is undesirable: Node version specified in package.json or CI config may change overtime, leading to ESLint to potentially be outdated; if cached, it still constitutes an overhead of management of CI cache
- If only installed globally, all required plugins must also be installed globally

Refer to [official doc](https://eslint.org/docs/user-guide/getting-started#installation-and-usage) for more information.

### Editor setup

#### [Atom](https://atom.io/)

- If not provided by default or previously deleted, install [linter](https://github.com/steelbrain/linter) package
- Install [linter-eslint](https://atom.io/packages/linter-eslint) package
- Enable the option `Fix errors on save` in settings for best experience
- Optional: if you need to lint Vue.js file:
    - Enable `Lint HTML files` option
    - Append `text.html.vue` to the value of `List of scopes to run ESLint on` option

#### [VS Code](https://code.visualstudio.com/)

- Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin
- Enable option `eslint.autoFixOnSave` for best experience
- Set `eslint.packageManager` to `yarn` if you're using Yarn instead of NPM
- Optional: if you need to lint Vue.js file, make sure `eslint.validate` settings contains specification for Vue language, e.g:
    ```
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ]
    ```
