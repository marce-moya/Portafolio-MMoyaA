module.exports = {
    pageExtensions: ['js', 'jsx'],
    webpack: (config) => {
      config.resolve.alias['@'] = path.join(__dirname, 'src');
      return config;
    },
  };