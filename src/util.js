////////////////////////////////////////////////////////////////////////////////
//                 _   ___
//   _____ _ _ ___| |_|_  |
//  |     | | |_ -|  _|  _|       2D game engine for the web
//  |_|_|_|_  |___|_| |___|       https://github.com/metayeti/myst2
//        |___|
//
//  Licensed under the terms of the MIT license ( https://mit-license.org/ )
//
//  Copyright (c) 2025 Danijel Durakovic
//
//  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//  myst2/src/util.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Auxiliary utility functions.
 */

/**
 * @callback iterCallback
 * @param {string} key Item key.
 * @param {object} item Item itself.
 * @param {number} index Item index.
 */

/**
 * Iterates over non-function members of an object.
 * 
 * @param {object} object
 * @param {iterCallback} callback
 */
export function iter(object, callback) {
	let index = 0;
	for (let key in object) {
		let item = object[key];
		if (
			Object.prototype.hasOwnProperty.call(object, key) &&
			!(item instanceof Function)
		) {
			callback(key, item, index++);
		}
	}
}

/**
 * Retreives the extension of a filename (after the last dot of the string).
 * Always outputs lowercase.
 *
 * @param {string} filename
 *
 * @returns {string}
 */
export function getFilenameExtension(filename) {
	if (filename.includes('.')) {
		return filename.split('.').pop().toLowerCase();
	}
	return '';
}