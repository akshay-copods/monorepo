module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-smallstair`
  extends: ['smallstair'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
