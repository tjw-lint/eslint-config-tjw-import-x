# eslint-config-tjw-import-x

The Jared Wilcurt's strict ESLint rules for ESM imports/exports.


## Using this

1. `npm install --save-dev eslint@10 eslint-plugin-import-x@4 eslint-config-tjw-import-x@latest`
   * **Requires:**
      * `eslint` >=10.0.0
      * `eslint-plugin-import-x` >=4.16.2
1. In your `eslint.config.js`:
    ```js
    import importPlugin from 'eslint-plugin-import-x';
    import tjwImport from 'eslint-config-tjw-import-x';

    export default [
      importPlugin.flatConfigs.recommended,
      tjwImport,
      {
        // Then project specific rules/settings
      }
    ];
    ```


## Vite aliases

You may want to add in an import resolver if you use **Vite** for aliasing.

`npm install --save-dev eslint-import-resolver-vite`

```js
// eslint.config.js
import path from 'node:path';

import importPlugin from 'eslint-plugin-import-x';
import tjwImport from 'eslint-config-tjw-import-x';

const __dirname = import.meta.dirname;

export default [
  importPlugin.flatConfigs.recommended,
  tjwImport,
  {
    // Project specific rules/settings
    settings: {
      'import-x/resolver': {
        vite: {
          viteConfig: {
            resolve: {
              alias: {
                '@': path.resolve(__dirname, 'src'),
                '@@': path.resolve(__dirname, 'tests'),
                '@@@': path.resolve(__dirname, 'docs')
              }
            }
          }
        }
      }
    }
  }
];
```


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import) (ESLint <10)
* [eslint-config-tjw-import-x](https://github.com/tjw-lint/eslint-config-tjw-import-x) (ESLint 10+)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
