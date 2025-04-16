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
//  myst2/src/myst2.js
//
////////////////////////////////////////////////////////////////////////////////

/**
 * This sourcefile serves as the main export hub for this engine. Everything
 * (except engine extensions) is importable from this file. (Makes life easier
 * for the user.)
 */

//
// namespace exports
//

export * as math from './math.js';
export * as random from './random.js';
export * as util from './util.js';

//
// class exports
//

export { Render } from './render.js';
export { Surface } from './surface.js';
//export { PointerInput } from './pointer_input.js';
//export { KeyboardInput } from './keyboard_input.js';
//export { ControllerInput } from './controller_input.js';
export { State } from './state.js';
export { Game } from './game.js';
