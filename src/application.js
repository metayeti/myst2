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
//  myst2/src/application.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Represents a myst2 application. Handles initialization, main loop and manages
 * views.
 */
export default class Application {
// : public

	static VIEW_MODE = {
		// Default view mode. Behaves the same as a <canvas> would normally.
		DEFAULT: 0,
		// <canvas> is centered relative to parent.
		CENTER: 1,
		// <canvas> is scaled to fit parent, and centered. This is useful if you
		// want proportional scaling with a fixed resolution.
		SCALE_FIT: 2,
		// <canvas> is stretched to fit parent.
		SCALE_STRETCH: 3,
		// <canvas> is expanded to fit parent. Physical dimensions of the element
		// are altered.
		EXPAND: 4
	};

// : private

	/**
	 * Determines if the game loop is currently running.
	 * @type {boolean}
	 * @private
	 */
	#running = false;

	/**
	 * Application's canvas. This is the only DOM element this engine requires.
	 * @type {HTMLCanvasElement}
	 */
	#canvas = null;

	/**
	 * Handles application resizes for specific view modes.
	 */

// : public

	/**
	 * Creates the application.
	 *
	 * @param {object} options
	 * @param {HTMLCanvasElement} options.canvas The <canvas> element.
	 * @param {number} [options.viewMode=VIEW_MODE.DEFAULT] Global application
	 *   view mode. Use one of the enumerated VIEW_MODE options.
	 * @param {bool} [options.useSimpleLoop=false] Normally, the application's
	 *   screens implement both draw() and update() functions which get called
	 *   out of sync (relative to drawing vs frame-rate). However, many games
	 *   have no need for a separate update() function since they handle logic
	 *   either on a user-driven-event basis, or they simply utilize intervals
	 *   or other mechanisms to rely on logic updates. In those cases,
	 *   useSimpleLoop should be set to true so that a simplified game loop
	 *   gets used internally by the engine. The main rule of thumb whether you
	 *   want a simple loop or not is if you want to implement update()
	 *   functions in your screens and tie the game's logic to it.
	 * @param {number} [options.framerate=60] Game's framerate. Ignored when
	 *   the simple loop is used.
	 * @param 
	 */
	constructor(options = {}) {
		const canvas = (
			(options.canvas instanceof HTMLCanvasElement)
			? options.canvas // we received <canvas> directly
			: document.querySelector(options.canvas) // we probably have a query
		);
		if (!(canvas instanceof HTMLCanvasElement)) {
			// we got something funny, perhaps an upside down cat but definitely
			// not a <canvas>
			throw 'Application needs to be initialized on a <canvas> element.';
		}
		this.#canvas = canvas;
	}
}