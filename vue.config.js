module.exports = {
  chainWebpack: config => {
    config.performance.maxEntrypointSize(900000).maxAssetSize(900000)
    config.plugins.delete('named-chunks')
  }
}
