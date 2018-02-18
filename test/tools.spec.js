import { expect } from 'chai';
import {
  validateEmail,
  detectType,
  isNumeric,
  isSet,
  hash,
} from '../src/tools';

describe('Test isNumeric', function () {
  it('should be true for numeric values', function(done) {
    expect(isNumeric(1)).to.be.true;
    done();
  });

  it('should be false for non numeric values', function(done) {
    expect(isNumeric('1a')).to.be.false;
    done();
  });
});

describe('Test isSet', function () {
  it('should be true for defined values', function(done) {
    var a = 1;
    expect(isSet(a)).to.be.true;
    done();
  });

  it('should be false for non numeric values', function(done) {
    var a;
    expect(isSet(a)).to.be.false;
    done();
  });
});

describe('Test hash', function () {
  it('should hash using md5', function(done) {
    expect(hash('a')).to.equal('0cc175b9c0f1b6a831c399e269772661')
    done();
  });

  it('should hash using sha1', function(done) {
    expect(hash('a', 'sha1')).to.equal('86f7e437faa5a7fce15d1ddcb9eaeaea377667b8')
    done();
  });

  it('should hash using sha256', function(done) {
    expect(hash('a', 'sha256')).to.equal('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb')
    done();
  });

  it('should hash using sha512', function(done) {
    expect(hash('a', 'sha512')).to.equal('1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75')
    done();
  });
});

describe('Test validateEmail', function () {
  it('should be true for valid emails', function(done) {
    expect(validateEmail('tareqzubidee@gmail.com')).to.be.true;
    done();
  });

  it('should be false for invalid emails', function(done) {
    expect(validateEmail('tareqzubidee@gmail')).to.be.false;
    done();
  });
});

describe('Test detectType', function () {
  it('should detect type for string input', function(done) {
    expect(detectType('json')).to.equal('application/json');
    done();
  });

  it('should detect type for file path input', function(done) {
    expect(detectType(__dirname + '/../package.json')).to.equal('application/json');
    done();
  });

  it('should be false unknown types', function(done) {
    expect(detectType('a')).to.be.false;
    done();
  });
});