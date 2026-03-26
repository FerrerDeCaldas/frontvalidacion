module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // config de jasmine si se necesita
      },
      clearContext: false // deja los resultados visibles en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true // quita los logs basura
    },
    coverageReporter: {
            dir: 'coverage/frontend-tailorflow',
            subdir: '.',
            reporters: [
                { type: 'html' },
                { type: 'lcovonly', file: 'lcov.info' }
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true, // Se cierra solo para asegurar que se escriba el archivo
    restartOnFileChange: false,
    failOnEmptyTestSuite: false
  });
};