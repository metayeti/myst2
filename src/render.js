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
//  myst2/src/render.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Render modes for rendering primitives.
 */
const RENDER_MODE = {
	FILL: 0,
	STROKE: 1,
	BOTH: 2
};

/**
 * Renderer class. Can be extended for custom features.
 */
export class Render {
// ~ private
	#mode = RENDER_MODE.FILL;

// ~ public

	/**
	 * Rendering context.
	 */
	ctx = null;

	/**
	 * Creates a renderer on a given context.
	 *
	 * @param {object} ctx
	 */
	constructor(ctx) {
		if (ctx !== undefined) {
			this.ctx = ctx;
		}
	}

	/**
	 * Primitives will be rendered using strokes.
	 * 
	 * @param {string} strokeColor
	 * @param {number} [strokeWidth]
	 *
	 * @returns {this}
	 */
	stroke(strokeColor, strokeWidth = 1) {
		if (strokeColor !== undefined) ctx.strokeStyle = strokeColor;
		if (strokeWidth !== undefined) ctx.width = strokeWidth;
		this.#mode = RENDER_MODE.STROKE;
		return this;
	}

	/**
	 * Primitives will be rendered using a fill.
	 *
	 * @param {string} fillColor 
	 *
	 * @returns {this}
	 */
	fill(fillColor) {
		if (fillColor !== undefined) ctx.fillStyle = fillColor;
		this.#mode = RENDER_MODE.FILL;
		return this;
	}

	/**
	 * Primitives will be rendered both with stroke and a fill.
	 *
	 * @param {string} fillColor
	 * @param {string} strokeColor
	 * @param {number} [strokeWidth]
	 *
	 * @returns {this}
	 */
	style(fillColor, strokeColor, strokeWidth = 1) {
		if (strokeColor !== undefined) ctx.strokeStyle = strokeColor;
		if (strokeWidth !== undefined) ctx.width = strokeWidth;
		if (fillColor !== undefined) ctx.fillStyle = fillColor;
		this.#mode = RENDER_MODE.BOTH;
		return this;
	}

	line() {
		throw 'line() not implemented yet';
	}

	rect() {
		throw 'rect() not implemented yet';
	}

	rectFill() {
		throw 'rectFill() not implemented yet';
	}

	arc() {
		throw 'arc() not implemented yet';
	}

	arcFill() {
		throw 'arcFill() not implemented yet';
	}

	sector() {
		throw 'sector() not implemented yet';
	}

	sectorFill() {
		throw 'sectorFill() not implemented yet';
	}

	circle() {
		throw 'circle() not implemented yet';
	}

	circleFill() {
		throw 'circleFill() not implemented yet';
	}

	polygon() {
		throw 'polygon() not implemented yet';
	}

	polygonFill() {
		throw 'polygonFill() not implemented yet';
	}

	image() {
		throw 'image() not implemented yet';
	}

	tile() {
		throw 'tile() not implemented yet';
	}

	stretchTile() {
		throw 'stretchTile() not implemented yet';
	}

	surface() {
		throw 'surface() not implemented yet';
	}

	text() {
		throw 'text() not implemented yet';
	}

	bmptext(text, x, y, bmpfont) {
		throw 'bmptext() not implemented yet';
	}
}
