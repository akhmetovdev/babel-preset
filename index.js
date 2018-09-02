module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        targets: { browsers: ['> 0.5%', 'last 2 versions', 'not dead'] },
        modules: false
      }
    ]
  ],
  plugins: [
    require('@babel/plugin-transform-runtime'),
    require('@babel/plugin-proposal-async-generator-functions'),
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-do-expressions'),
    require('@babel/plugin-proposal-export-default-from'),
    require('@babel/plugin-proposal-export-namespace-from'),
    require('@babel/plugin-proposal-function-bind'),
    require('@babel/plugin-proposal-function-sent'),
    require('@babel/plugin-proposal-logical-assignment-operators'),
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    require('@babel/plugin-proposal-numeric-separator'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-optional-catch-binding'),
    require('@babel/plugin-proposal-optional-chaining'),
    [
      require('@babel/plugin-proposal-pipeline-operator'),
      { proposal: 'minimal' }
    ],
    require('@babel/plugin-proposal-throw-expressions'),
    require('@babel/plugin-proposal-unicode-property-regex')
  ]
});
