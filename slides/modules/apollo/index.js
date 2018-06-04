const path = require('path')

module.exports = function nuxtApollo(moduleOptions) {

  // Add plugin for vue-apollo
  this.addPlugin({
    src: path.join(__dirname, 'plugin.js')
  })

  // Add vue-apollo and apollo-client in common bundle
  this.addVendor(['vue-apollo', 'apollo-boost'])
 
  // Add graphql loader
  this.extendBuild((config) => {
    config.resolve.extensions = config.resolve.extensions.concat('.graphql', '.gql')
    const gqlRules = {
      test: /\.(graphql|gql)$/,
      use: 'graphql-tag/loader',
      exclude: /(node_modules)/
    }
    
    /*
    if(options.includeNodeModules){
      delete gqlRules.exclude
    }
    */
    config.module.rules.push(gqlRules)
  })
}