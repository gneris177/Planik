{
  "presets" : [
    "@emotion/babel-preset-css-prop"
    ["@babel/preset-env", "@babel/preset-react"]
  ],
  "plugins": [
    "babel-plugin-dynamic-import-node",
    "@babel/plugin-transform-strict-mode",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-async-generators",
    "inline-react-svg",
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./components",
            "rootPathPrefix": "@components"
          },
          {
            "rootPathSuffix": "./components/styles",
            "rootPathPrefix": "@styles"
          }
        ]
      }
    ]
  ]
}