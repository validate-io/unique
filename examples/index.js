'use strict';

var isUnique = require( './../lib' );

console.log( isUnique( [1,2,3] ) );
// returns true

console.log( isUnique( [] ) );
// returns false

console.log( isUnique( [1,2,1] ) );
// returns false
