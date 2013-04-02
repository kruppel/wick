var fs = require('fs')
  , path = require('path')
  , util = require('util')
  , glob = require('glob')
  , async = require('async')
  , wick;

wick = {

  precompile: function (src, callback) {
    var pattern;

    if (src[src.length - 1] !== '/') src += '/';

    pattern = src + '**/*.handlebars';

    glob(pattern, function (err, files) {
      if (err) return callback(err);

      async.reduce(files, '', function (str, file, next) {
        fs.readFile(file, 'utf8', function (err, data) {
          if (err) return next(err);

          var re = new RegExp(src + '(.*).handlebars')
            , name = file.match(re)[1];

          data = data.replace(/(\r\n|\n|\r)/gm,'');
          str += util.format('Ember.TEMPLATES[\'%s\'] = \'%s\';\n', name, data);

          next(null, str);
        });
      }, callback);
    });
  }

};

module.exports = wick;
