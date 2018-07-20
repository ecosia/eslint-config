/**
 * @license
 * Copyright 2018 Ecosia GmbH.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
    extends: 'airbnb-base',
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        // comma-dangle would cost us another babel-transform so we skip it for now
        'comma-dangle': ['error', 'always-multiline'],
        'function-paren-newline': ['off'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'indent': ['error', 4],
        'no-alert': 'error',
        'no-console': 'warn',
        'no-new': 'off',
        'no-restricted-globals': ['error', 'event'],
        'object-curly-newline': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'space-before-function-paren': 'warn',
    },
};
