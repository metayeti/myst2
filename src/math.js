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
//  myst2/src/math.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Various math and geometry-related stuff.
 */

//
// classes
//

// --------
// this is for internal class-to-class communication only
// (so we may skip comparing constructor.name strings like cavemen)
const POINT_CLASS = 0;
//const LINE_CLASS = 1;
const RECTANGLE_CLASS = 2;
//const CIRCLE_CLASS = 3;
const VECTOR_2D_CLASS = 4;
// --------

export class Point {
	isOfType = POINT_CLASS;

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	distanceTo(other) {
		return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
	}

	magnitude() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

export class Rectangle {
	isOfType = RECTANGLE_CLASS;

	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	get area() {
		return this.width * this.height;
	}

	get perimeter() {
		return 2 * (this.width + this.height);
	}

	get center() {
		return new Point(
			this.x + this.width / 2,
			this.y + this.height / 2
		);
	}

	contains(point) {
		return (
			point.x >= this.x &&
			point.x <= this.x + this.width &&
			point.y >= this.y &&
			point.y <= this.y + this.height
		);
	}

	intersects(other) {
		return (
			other.X < this.x + this.width &&
			this.x < other.x + other.width &&
			other.y < this.y + this.height &&
			this.y < other.y + other.height
		);
	}
}

export class Vector2D {
	isOfType = VECTOR_2D_CLASS;

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	add(other) {
		return new Vector2D(this.x + other.x, this.y + other.y);
	}

	subtract(other) {
		return new Vector2D(this.x - other.x, this.y - other.y);
	}

	scale(factor) {
		return new Vector2D(this.x * factor, this.y * factor);
	}

	get magnitude() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	normalize() {
		const magnitude = this.magnitude;
		if (magnitude === 0) {
			// odd case where it's mathematically impossible to normalize
			// a vector, so return a zero vector
			return new Vector2D(0, 0);
		}
		// return a unit vector
		return new Vector2D(
			this.x / magnitude,
			this.y / magnitude
		);
	}

	dot(other) {
		return this.x * other.x + this.y * other.y;
	}

	angleBetween(other) {
		const m1 = this.magnitude, m2 = other.magnitude;
		if (m1 === 0 || m2 === 0) {
			return 0;
		}
		const theta = this.dot(other) / (m1 * m2);
		return Math.acos(clamp(theta, -1, 1));
	}
}

//
// functions
//

/**
 * Returns a number limited to a given range.
 *
 * @param {number} number Input number.
 * @param {number} min Lower boundary.
 * @param {number} max Upper boundary.
 *
 * @returns {number}
 */
export function clamp(number, min, max) {
	if (number <= min) return min;
	else if (number >= max) return max;
	return number;
}
