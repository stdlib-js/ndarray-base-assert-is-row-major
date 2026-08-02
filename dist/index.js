/** @license Apache-2.0 */

'use strict';

/**
* Given a stride array, determine whether an array is row-major.
*
* @module @stdlib/ndarray-base-assert-is-row-major
*
* @example
* var isRowMajor = require( '@stdlib/ndarray-base-assert-is-row-major' );
*
* var bool = isRowMajor( [ 2, 1 ] );
* // returns true
*
* bool = isRowMajor( [ 1, 2 ] );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
