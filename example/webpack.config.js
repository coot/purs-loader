var path = require('path');

var config
  = { entry: './src/entry'
    , output: { path: __dirname
              , filename: 'bundle.js'
              }
    , module: { loaders: [ { test: /\.purs$/, loader: 'purs-loader?src[]=src' } ] }
    , resolve: { modulesDirectories: [ 'node_modules',
                                       'output'
                                     ]
               , extensions: ['', '.js', '.purs']
               }
    , resolveLoader: { root: path.join(__dirname, 'node_modules') }
    }
    ;

module.exports = config;
