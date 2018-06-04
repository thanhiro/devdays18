const nodeExternals = require('webpack-node-externals');


module.exports = {
  webpack: (config, { target, dev }, webpack) => {
    config.entry.main = "./server/index.js";
    let newConfig = config;

    return newConfig;
  }
};
