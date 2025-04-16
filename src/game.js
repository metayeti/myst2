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
//  myst2/src/game.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Represents a myst2 game. Handles initialization, main loop and manages views.
 */
export class Game {
// ~ public

	/**
	 * Various available game view modes.
	 */
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

// ~ private

	/**
	 * Determines if the game loop is currently running.
	 * 
	 * @type {boolean}
	 * @private
	 */
	#running = false;

	/**
	 * Game's primary canvas.
	 * 
	 * @type {HTMLCanvasElement}
	 * @private
	 */
	#canvas = null;

	/**
	 * Currently active game state.
	 *
	 * @type {object}
	 * @private
	 */
	#state = null;

// ~ public

	/**
	 * Creates the game.
	 *
	 * @param {object} options
	 * @param {HTMLCanvasElement} options.canvas The <canvas> element.
	 * @param {object} options.state Initial game state.
	 * @param {number} [options.viewMode=VIEW_MODE.DEFAULT] Global game view
	 *   mode. Use one of the enumerated VIEW_MODE options.
	 * @param {bool} [options.useSimpleLoop=false] Normally, the game's screens
	 *   implement both draw() and update() functions which are typically called
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
	 */
	constructor(options = {}) {
		// configure <canvas>
		const canvas = (
			(options.canvas instanceof HTMLCanvasElement)
			? options.canvas // we received <canvas> directly
			: document.querySelector(options.canvas) // we probably have a query
		);
		if (!(canvas instanceof HTMLCanvasElement)) {
			// we got something funny, perhaps an upside down cat but definitely
			// not a <canvas>
			throw 'Game needs to be initialized on a <canvas> element.';
		}
		this.#canvas = canvas;

		// set intial game state
		if (options.state === undefined) {
			throw 'Game needs an initial state.';
		}
		this.setState(options.state);
	}

	/**
	 * Sets the game's view mode, which has an effect on how the game gets
	 * rendered on the screen - canvas dimensions may change. This also changes
	 * how pointer events translate coordinates.
	 *
	 * @param {number} mode - One of the options in VIEW_MODE.
	 */
	setViewMode(mode) {
		function _setview(_mode) {
			//TODO
		}
		// sets the view mode
		switch (mode) {
			case VIEW_MODE.DEFAULT:
				return _setview(this.viewMode = VIEW_MODE.DEFAULT);
			case VIEW_MODE.CENTER:
				return _setview(this.viewMode = VIEW_MODE.CENTER);
			case VIEW_MODE.SCALE_FIT:
				return _setview(this.viewMode = VIEW_MODE.SCALE_FIT);
			case VIEW_MODE.SCALE_STRETCH:
				return _setview(this.viewMode = VIEW_MODE.SCALE_STRETCH);
			case VIEW_MODE.EXPAND:
				return _setview(this.viewMode = VIEW_MODE.EXPAND);
		}
	}

	/**
	 * Retreives the currently active view mode.
	 */
	getViewMode() {
		return this.viewMode;
	}

	/**
	 * Forces a view update. This may be necessary to prevent flickering when
	 * switching between view updates often.
	 */
	forceUpdateView() {
		//TODO
	}

	/**
	 * Sets the next state to be active. Only the next state will be receiving
	 * events and rendering to sreen, while the previous will be made inactive.
	 *
	 * @param {object} next Next state.
	 */
	setState(next) {
		//TODO
	}

	/**
	 * Enter the main game loop.
	 */
	run() {
	}
}