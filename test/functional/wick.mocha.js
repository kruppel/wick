var fs = require('fs')
  , path = require('path')
  , wick = require('./../../lib/wick');

describe('[functional] wick', function () {

  describe('when source directory exists', function () {

    describe('and there are handlebars templates', function () {

      it('calls back with string of precompiled templates', function (done) {
        var expected = fs.readFileSync('./test/fixtures/expected.js', 'utf8')
          , src = './test/fixtures/seed/full';

        wick.precompile(src , function (err, str) {
          str.should.equal(expected);

          done();
        });
      });

    });

    describe('and there are no handlebars templates', function () {

      it('calls back with an empty string', function (done) {
        var src = './test/fixtures/seed/empty';

        wick.precompile(src, function (err, str) {
          str.should.equal('');

          done();
        });
      });

    });

  });

  /*
  describe('when source directory does not exist', function () {

    it('calls back with an error', function (done) {
      var src = './wocka/wocka/';

      wick.precompile(src, function (err, str) {
        err.should.be.instanceOf(Error);

        done();
      });
    });

  });
 */

});
