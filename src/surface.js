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
//  myst2/src/surface.js
//
////////////////////////////////////////////////////////////////////////////////

import { Render } from './render.js';

const DEFAULT_SURFACE_WIDTH = 50;
const DEFAULT_SURFACE_HEIGHT = 50;

/**
 * Surface class. Represents a surface onto which graphics can be rendered.
 * Functionally, it is a thin wrapper around an invisible <canvas> element.
 */
export class Surface {
// ~ private

	/**
	 * The <canvas> element for this surface.
	 * 
	 * @type {HTMLCanvasElement}
	 * @private
	 */
	#canvas = null;

// ~ public

	/**
	 * Rendering context.
	 */
	ctx = null;

	/**
	 * Renderer for this surface.
	 */
	render = null;

	/** Surface proportions. */
	width = 0;
	height = 0;

	/**
	 * Creates a surface. When the canvas parameter is provided, it will simply
	 * wrap the element. Otherwise, an invisible canvas will be created. In the
	 * latter case, we refer to the surface as a virtual surface.
	 *
	 * @param {object} options Surface options.
	 * @param {HTMLCanvasElement} [options.canvas] Canvas element to create the
	 *   surface on.
	 * @param {number} [options.width] - Width of the new virtual surface.
	 * @param {number} [options.height] - Height of the new virtual surface.
	 * @param {object} [options.render] - Custom renderer. Default renderer is
	 *   provided if omitted.
	 */
	constructor(options = {}) {
		// configure <canvas>
		if (options.canvas instanceof HTMLCanvasElement) {
			// we are wrapping an existing canvas element
			this.canvas = options.canvas;
			this.width = this.canvas.width;
			this.height = this.canvas.height;
		}
		else {
			// we are creating a virtual surface
			options.width ??= DEFAULT_SURFACE_WIDTH;
			options.height ??= DEFAULT_SURFACE_HEIGHT;
			this.width = canvas.width = options.width;
			this.height = canvas.height = options.height;
		}
		// retreive the rendering context
		this.ctx = this.canvas.getContext('2d');
		// configure the renderer
		if (options.render === undefined) {
			// we're using the default renderer
			this.render = new Render(this.ctx);
		}
		else {
			// we're using the user-provided renderer
			this.render = options.render;
			this.render.ctx = this.ctx;
		}
	}

	/**
	 * Retreives the <canvas> element associated with this surface.
	 *
	 * @returns {HTMLCanvasElement}
	 */
	getCanvas() {
		return this.#canvas;
	}

	/**
	 * Clears the surface.
	 */
	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	/**
	 * Resize the surface to new dimensions.
	 *
	 * @param {number} width New width of the surface.
	 * @param {number} height New height of the surface.
	 */
	resize(width, height) {
		this.width = this.#canvas.width = width;
		this.height = this.#canvas.height = height;
	}
}