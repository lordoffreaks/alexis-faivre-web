module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  // testEnvironment: 'jest-environment-jsdom-global',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*\\.(spec)\\.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest'
}
