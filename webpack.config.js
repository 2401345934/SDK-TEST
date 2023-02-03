const path = require("path")
const webpack = require("webpack")

module.exports = [
  // 未压缩版
  {
    mode: "development",
    entry: {
      'sdk': './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'SDK',
      libraryTarget: "umd"
    }
  },
  // 压缩版
  {
    mode: "production",
    entry: {
      'sdk.min': './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'SDK',
      libraryTarget: "umd"
    },
  }
]
