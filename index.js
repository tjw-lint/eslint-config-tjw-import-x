export default {
  rules: {
    'import-x/default': 'error',
    'import-x/dynamic-import-chunkname': 'off',
    'import-x/export': 'error',
    'import-x/exports-last': 'off',
    'import-x/extensions': [
      'error',
      'always'
    ],
    'import-x/first': 'error',
    'import-x/group-exports': 'off',
    'import-x/max-dependencies': 'off',
    'import-x/named': 'error',
    'import-x/namespace': [
      'error',
      {
        allowComputed: false
      }
    ],
    'import-x/newline-after-import': [
      'error',
      {
        count: 1
      }
    ],
    'import-x/no-absolute-path': [
      'error',
      {
        amd: true,
        commonjs: true,
        esmodule: true
      }
    ],
    'import-x/no-amd': 'error',
    'import-x/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: true
      }
    ],
    'import-x/no-commonjs': 'off',
    'import-x/no-cycle': 'error',
    'import-x/no-default-export': 'off',
    'import-x/no-deprecated': 'error',
    'import-x/no-duplicates': [
      'error',
      {
        considerQueryString: false
      }
    ],
    'import-x/no-dynamic-require': 'error',
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        bundledDependencies: false,
        devDependencies: [
          '**/*.test.js',
          '**/tests/unit/*.js',
          '**/e2e/support/*.js',
          '**/e2e/plugins/*.js',
          '**/vue.config.js'
        ],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import-x/no-import-module-exports': 'error',
    'import-x/no-internal-modules': 'off',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-named-export': 'off',
    'import-x/no-namespace': 'error',
    'import-x/no-nodejs-modules': 'off',
    'import-x/no-relative-packages': 'error',
    'import-x/no-relative-parent-imports': 'off',
    'import-x/no-restricted-paths': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-unassigned-import': 'off',
    'import-x/no-unresolved': [
      'error',
      {
        amd: true,
        caseSensitive: true,
        caseSensitiveStrict: true,
        commonjs: true
      }
    ],
    'import-x/no-unused-modules': [
      'error',
      {
        missingExports: false,
        unusedExports: true
      }
    ],
    'import-x/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: false
      }
    ],
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc'
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/helpers/**',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@/mixins/**',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@@@/helpers/**',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@@@/mixins/**',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@/**/*.vue',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@@@/**/*.vue',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '**/*.vue',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@@/**',
            group: 'object',
            position: 'before'
          }
        ]
      }
    ],
    'import-x/prefer-default-export': 'off',
    'import-x/unambiguous': 'off'
  }
};
