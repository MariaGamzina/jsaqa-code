/** @type {import('jest').Config} */
const config = {
    verbose: true,
    "coverageThreshold": {
        "branches": 100,
        "functions": 100,
        "lines": 100
  },
  forceCoverageMatch: ['**/*.js', '**/*.jsx'],
  coveragePathIgnorePatterns: ["<rootDir>/coverage/", "<rootDir>/node_modules/"],
  };
  
  
  module.exports = config;