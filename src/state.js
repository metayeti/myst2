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
//  myst2/src/state.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Represents a game state. Only one state can be active at any given time.
 */
export class State {
// ~ private

	/**
	 * This state's primary surface.
	 */
	#surface = null;

// ~ public

	constructor() {
	}



	/**
	 * Initializes this screen.
	 *
	 * @abstract
	 */
	onInit() {/**/}

	/**
	 * Occurs when this screen is entered.
	 *
	 * @abstract
	 */
	onEnter() {/**/}

	/**
	 * Occurs when this screen is exited.
	 *
	 * @abstract
	 */
	onExit() {/**/}

	/**
	 * Compute one cycle of logic.
	 *
	 * This function is only called when the application has not been
	 * initialized with `useSimpleLoop: true` (default is false).
	 *
	 * @abstract
	 */
	onUpdate() {/**/}

	/**
	 * Draws the current state of the screen to to the screen.
	 *
	 * @abstract
	 */
	onDraw() {/**/}
}