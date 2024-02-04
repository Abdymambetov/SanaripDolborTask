module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.module\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
};
  