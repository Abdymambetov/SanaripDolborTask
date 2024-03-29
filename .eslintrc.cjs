const rules = {
  'eqeqeq': [ 'error',
    'always',
    { null: 'ignore' } ],
  'quotes': [
    'error', 'single',
  ],
  'keyword-spacing': [ 'error', { 'before': true } ],
  'prefer-const': 'error',
  'indent': [
    'error', 2,
  ],
  'semi': [
    'error', 'always',
  ],
  'no-restricted-syntax': [
    'warn', {
      'selector': 'MemberExpression[property.name="log"]',
      'message': 'Ну ты и лох консольный',
    },
  ],
  'no-mixed-operators': [
    'error', {
      'groups': [
        [
          '+',
          '-',
          '*',
          '/',
          '%',
          '**',
        ],
        [
          '&',
          '|',
          '^',
          '~',
          '<<',
          '>>',
          '>>>',
        ],
        [
          '==',
          '!=',
          '===',
          '!==',
          '>',
          '>=',
          '<',
          '<=',
        ],
        [
          '&&', '||',
        ],
        [
          'in', 'instanceof',
        ],
      ],
      'allowSamePrecedence': true,
    },
  ],
  'no-empty': [
    'error', { 'allowEmptyCatch': true },
  ],
  'no-trailing-spaces': 'error',
  'no-var': 'error',
  'no-self-compare': 'error',
  'no-eval': 'error',
  'no-multiple-empty-lines': [
    'error', { max: 2, maxEOF: 0, maxBOF: 0 },
  ],
  'no-multi-spaces': [
    'error', { ignoreEOLComments: true, exceptions: { PropertyAssignment: false } },
  ],
  'arrow-spacing': [
    'error', { 'before': true, 'after': true },
  ],
  'no-useless-computed-key': 'error',
  'space-in-parens': [
    'error', 'never',
  ],
  'space-before-blocks': 'error',
  'no-whitespace-before-property': 'error',
  'key-spacing': 'error',
  'no-lone-blocks': 'error',
  'computed-property-spacing': [
    'error', 'always',
  ],
  'block-spacing': [
    'error', 'always',
  ],
  'array-bracket-newline': [
    'error', 'consistent',
  ],
  'object-curly-newline': [
    'error', { multiline: true },
  ],
  'array-element-newline': [
    'error', { 'minItems': 3 },
  ],
  'object-property-newline': [
    'error', { allowAllPropertiesOnSameLine: true },
  ],
  'array-bracket-spacing': [
    'error', 'always',
  ],
  'object-curly-spacing': [
    'error', 'always',
  ],
  'eol-last': [ 'error', 'always' ],
  'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
  'max-len': [ 'error', { 'code': 120 } ],
  'space-infix-ops': 'error',
  'comma-dangle': [ 'error', 'only-multiline' ],
  'react-hooks/exhaustive-deps': 0,
  'import/no-duplicates': 'error',
  'import/no-useless-path-segments': 'error',
  'import/newline-after-import': [ 'error', { 'count': 2 } ],
  'import/extensions': 0,
  'import/first': [ 'error', 'absolute-first' ],
  'import/order': [
    'error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
    },
  ],
};


module.exports = {
  'extends': [
    'react-app', 'react-app/jest',
  ],
  'plugins': [
    'react-hooks', 'import',
  ],
  rules: { ...rules },
};
