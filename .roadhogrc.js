const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, ''),
]

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  "theme": "./theme.config.js",
  "env": {
      "development": {
        "extraBabelPlugins": [
          "dva-hmr",
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true }]
        ]
      },
      "production": {
        "extraBabelPlugins": [
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true}]
        ]
      }
  },
  proxy:[
    {
      context: ['/api/v1/login/result','/api/v1/login/user/result'],
      target: "http://api.reawei.cn",
      secure: false,
      changeOrigin: true
    }
  ],
  // "proxy": {
  //   "/api": {
  //     "target": "api.reawei.cn",
  //     "changeOrigin": true,
  //     "pathRewrite": { "" : "" }
  //   }
  // }

}
