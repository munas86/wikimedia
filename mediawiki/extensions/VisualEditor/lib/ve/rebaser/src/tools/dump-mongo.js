#!/usr/bin/env node

var mongodb = require( 'mongodb' );

new mongodb.MongoClient(
	new mongodb.Server( 'localhost', 27017 ),
	// eslint-disable-next-line camelcase
	{ native_parser: true }
).connect().then( function ( client ) {
	var db = client.db( 'test' );
	return db.collection( 'vedocstore' ).find().toArray().then( function ( result ) {
		console.log( JSON.stringify( result ) );
		client.close();
	} );
} ).catch( function ( err ) {
	console.error( err );
} );
