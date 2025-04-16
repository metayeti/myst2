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
//  myst2/src/random.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Randomness-related functions.
 */

/**
 * Returns a random integer in range.
 *
 * @param {number} min Lower boundary.
 * @param {number} max Upper boundary.
 *
 * @returns {number}
 */
export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns the result of a coin flip.
 *
 * @returns {bool}
 */
export function coinClip() {
	return 1 == Math.floor(Math.random() * 2);
}

/**
 * Returns the result of a die roll. Rolls a standard 6-sided die when no input
 * is given.
 *
 * @param {number} [N=6] Numbers of sides on the die.
 *
 * @returns {boolean}
 */
export function dieRoll(N) {
	N = (N >= 1) ? N : 6;
	return Math.floor(Math.random() * N) + 1;
}

/**
 * Shuffles a list of elements. This method modifies the original array.
 * 
 * @param {array} list List to shuffle.
 */
export function shuffle(list) {
	//fisher-yates shuffle
	let i = list.length;
	while (--i) {
		let r = Math.floor(Math.random() * (i + 1));
		let tmp = list[i];
		list[i] = list[r];
		list[r] = tmp;
	}
}

/**
 * Get an element from a list of elements at random.
 *
 * @param {array} list List to choose from.
 *
 * @returns {*}
 */
export function choose(list) {
	if (list instanceof Array) {
		return list[Math.floor(Math.random() * list.length)];
	}
}

/**
 * Get an element from a list of elements at random, and removes it from the
 * list. This method modifies the original array.
 *
 * @param {array} list List to pick from.
 *
 * @returns {*}
 */
export function pick(list) {
	if (list instanceof Array && list.length > 0) {
		return list.splice(Math.floor(Math.random() * list.length), 1)[0];
	}
}