module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'styl'
  ],
  setupFiles: [
    '<rootDir>/test/jestLib/setup.js'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  // jest modules installed by cozy-scripts
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.jsx$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(png|gif|jpe?g|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    // identity-obj-proxy module is installed by cozy-scripts
    'styles': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    'node_modules/(?!cozy-ui)'
  ],
  globals: {
    '__ALLOW_HTTP__': false,
    '__TARGET__': 'browser',
    'cozy': {}
  }
}
