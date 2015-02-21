/**
*
*	VALIDATE: unique
*
*
*	DESCRIPTION:
*		- Validates if a value is a unique array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// FUNCTIONS //

/**
* FUNCTION: has( arr, x )
*	Performs a linear search for a value.
*
* @private
* @param {Array} arr - array over which to search
* @param {*} x - value for which to search
* @returns {Boolean} boolean indicating if the array contains the value
*/
function has( arr, x ) {
	var len = arr.length;
	for ( var i = 0; i < len; i++ ) {
		if ( arr[i] === x ) {
			return true;
		}
	}
	return false;
} // end FUNCTION has()


// ISUNIQUE //

/**
* FUNCTION: isUnique( value )
*	Validates if a value is a unique array (i.e., only contains unique values).
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a unique array
*/
function isUnique( value ) {
	var len,
		arr,
		x;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	arr = [];
	for ( var i = 0; i < len; i++ ) {
		x = value[ i ];
		if ( has( arr, x ) ) {
			return false;
		} else {
			arr.push( x );
		}
	}
	return true;
} // end FUNCTION isUnique()


// EXPORTS //

module.exports = isUnique;
