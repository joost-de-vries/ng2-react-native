module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // Hammer.js
      {pattern: 'node_modules/hammerjs/hammer.js', included: true, watched: true},

      // Polyfills
      'node_modules/reflect-metadata/Reflect.js',

      // System.js
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      {pattern: 'node_modules/angular2-react-native/bundles/testing.dev.js', included: true, watched: true},

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      // Our built application code
      {pattern: 'node_modules/angular2-react-native/test_helpers/mock_react_native.js', included: false},
      {pattern: 'dist/karma/src/**/*.js', included: false, watched: false},
      {pattern: 'dist/karma/test/**/*.js', included: false, watched: false}
    ],

    customLaunchers: {
      'ChromeNoSandbox': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    reporters: ['dots'],
    port: 9876,
    colors: true,
    //logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
