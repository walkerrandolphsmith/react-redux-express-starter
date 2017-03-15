module.exports = function(wallaby) {
    var wallabyWebpack;
    var packageConfig;
    var specFilePattern;
    var srcFilePattern;
    var babelProcessor;
    var webpackPostProcessor;

    wallabyWebpack = require('wallaby-webpack');
    packageConfig = require('./package.json');

    specFilePattern = 'scripts/**/*.test.js';
    srcFilePattern = 'scripts/**/*.js*';

    babelProcessor = wallaby.compilers.babel(packageConfig.babel);

    webpackPostProcessor = wallabyWebpack({ });

    return {
        testFramework: 'mocha',
        debug: true,
        workers: {
            initial: 12,
            regular: 12
        },
        files: [
            { pattern: 'node_modules/chai/chai.js', instrument: false },
            { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
            { pattern: srcFilePattern, load: false },
            { pattern: specFilePattern, ignore: true }
        ],
        tests: [
            { pattern: specFilePattern, load: false }
        ],
        compilers: {
            '**/*.js*': babelProcessor
        },
        postprocessor: webpackPostProcessor,
        bootstrap: function() {
            chai.should();
            expect = chai.expect;
            assert = chai.assert;
            wallaby.testFramework.ui('tdd');

            window.__moduleBundler.loadTests();
        }
    };
};