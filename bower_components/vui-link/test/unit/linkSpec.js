( function() {
	'use strict';

	describe( 'vui-link', function() {

		var node;

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
			node = document.body.appendChild( document.createElement( 'a' ) );
		} );

		afterEach( function() {
			document.body.removeChild( node );
		} );

		it( 'defines a "vui-link" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-link' );
		} );

		it( 'defines a "vui-link:hover" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-link:hover' );
		} );

		it( 'defines a "vui-link:focus" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-link:focus' );
		} );

		it( 'defines a "vui-link-main" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-link-main' );
		} );

		describe( 'normal', function() {

			beforeEach( function () {
				node.className = 'vui-link';
			} );

			it( 'has the correct color', function() {
				expect( node ).toHaveColor( 'rgb(0, 97, 127)' );
			} );

			it( 'has font-weight normal', function() {
				expect( node ).toHaveFontWeight( 'normal' );
			} );

			it( 'has text-decoration of no underline', function() {
				expect( node ).toHaveTextDecoration( 'none' );
			} );

		} );

		describe( 'main', function() {

			beforeEach( function () {
				node.className = 'vui-link vui-link-main';
			} );

			it( 'has font-weight bold', function() {
				expect( node ).toHaveFontWeight( 'bold' );
			} );

		} );

	} );

} )();
