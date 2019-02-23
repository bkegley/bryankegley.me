const base = require('../../jest.config.base.js')
const pjson = require('./package')

module.exports = {
  ...base,
  name: pjson.name,
  displayName: pjson.name,
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.preprocess.js',
  },
  testRegex: '/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/jest.loadershim.js'],
  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
}
