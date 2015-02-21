/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isUnique = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-unique', function tests() {

	it( 'should export a function', function test() {
		expect( isUnique ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isUnique( ['a','b','c'] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[1,2,1]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isUnique( value );
		}
	});

	it( 'should negatively validate if repeated reference', function test() {
		var obj = {};
		assert.notOk( isUnique( [obj,obj] ) );
	});

});
