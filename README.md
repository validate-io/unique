Unique
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a unique array.


## Installation

``` bash
$ npm install validate.io-unique
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isUnique = require( 'validate.io-unique' );
```

#### isUnique( value )

Validates if a `value` is a unique `array`; i.e., only contains unique elements.

``` javascript
var value = [1,2,3];

var bool = isUnique( value );
// returns true
```


## Examples

``` javascript
var isUnique = require( 'validate.io-unique' );

console.log( isUnique( [1,2,3] ) );
// returns true

console.log( isUnique( [] ) );
// returns false

console.log( isUnique( [1,2,1] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-unique.svg
[npm-url]: https://npmjs.org/package/validate.io-unique

[travis-image]: http://img.shields.io/travis/validate-io/unique/master.svg
[travis-url]: https://travis-ci.org/validate-io/unique

[coveralls-image]: https://img.shields.io/coveralls/validate-io/unique/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/unique?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/unique.svg
[dependencies-url]: https://david-dm.org/validate-io/unique

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/unique.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/unique

[github-issues-image]: http://img.shields.io/github/issues/validate-io/unique.svg
[github-issues-url]: https://github.com/validate-io/unique/issues
