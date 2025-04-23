# Contributing to myst2

Thank you for considering contributing to the myst2 engine. I welcome all contributions with an open mind, but to ensure long-term stability and quality of this project, I need to ask you to please familiarize yourself with the rules outlined in this document before attempting to contribute. This is particularly important for code contributions, which must adhere to the strict [code style guide](#2-code-style-guide). You are also expected to [document your code](#4-updating-documentation) after the PR has been merged. Above all, the contribution needs to be of highest possible quality.

Before you start, please also see the [Code of Conduct](/CONDUCT.md).

## Table of Contents

1. [How to Contribute](#1-how-to-contribute)  
  1.1. [Reporting Bugs](#11-reporting-bugs)  
  1.2. [Suggesting Features](#12-suggesting-features)  
  1.3. [Submitting Code](#13-submitting-code)  
2. [Code Style Guide](#2-code-style-guide)  
  2.1. [Write optimal and performant code](#21-write-optimal-and-performant-code)  
  2.2. [Keep the code simple and try not to repeat yourself too much](#22-keep-the-code-simple-and-try-not-to-repeat-yourself-too-much)  
  2.3. [Use tabs and only tabs to indent code](#23-use-tabs-and-only-tabs-to-indent-code)  
  2.4. [Use semicolons](#24-use-semicolons)  
  2.5. [Stick to 80 columns as best you can](#25-stick-to-80-columns-as-best-you-can)  
  2.6. [Make variables const by default](#26-make-variables-const-by-default)  
  2.7. [All-uppercase any hardcoded constants](#27-all-uppercase-any-hardcoded-constants)  
  2.8. [Use comments](#28-use-comments)  
  2.9. [Add spaces when listing function parameters or items in an array](#29-add-spaces-when-listing-function-parameters-or-items-in-an-array)  
  2.10. [Expand, and expand a lot](#210-expand-and-expand-a-lot)  
  2.11. [Break long ternary expressions into multiple lines](#211-break-long-ternary-expressions-into-multiple-lines)  
  2.12. [When chaining functions, break the calls into lines](#212-when-chaining-functions-break-the-calls-into-lines)  
  2.13. [Use empty lines to separate code into logical units](#213-use-empty-lines-to-separate-code-into-logical-units)  
  2.14. [Use the following if statement style](#214-use-the-following-if-statement-style)  
  2.15. [Use the following switch statement style](#215-use-the-following-switch-statement-style)  
  2.16. [Use the following class style](#216-use-the-following-class-style)  
  2.17. [Don't overuse functional styles and avoid exposing functional API](#217-dont-overuse-functional-styles-and-avoid-exposing-functional-api)  
  2.18. [Don't use getters and setters (unless you have a very good reason)](#218-dont-use-getters-and-setters-unless-you-have-a-very-good-reason)  
  2.19. [Use JSDoc basically everywhere](#219-use-jsdoc-basically-everywhere)  
  2.20. [When adding a new file, follow these steps](#220-when-adding-a-new-file-follow-these-steps)  
  2.21. [No AI](#221-no-ai)  
3. [Why don't you use [my favorite autoformatter]?](#3-why-dont-you-use-my-favorite-autoformatter)  
4. [Updating Documentation](#4-updating-documentation)  
5. [Finding Help](#5-finding-help)

## 1. How to Contribute

### 1.1. Reporting Bugs

- Check the issue tracker to ensure the bug hasn't already been reported.
- Open a new issue with a clear title and detailed description, including:
  - Steps to reproduce the bug
  - Expected behavior
  - Actual behavior
  - Screenshots or logs (if applicable)
  - Your environment (OS, browser version)

### 1.2. Suggesting Features

- Open an issue in the issue tracker with the label `feature-request`.
- Describe the feature, why it's valuable, and any potential implementation ideas.
- Be open to having your feature turned down or delayed, perhaps indefinitely (unless you're willing to implement it yourself). I only have so much time and I generally implement features that I personally need. Occasionally I may make an exception if a feature is something relevant to my needs or the greater good.

### 1.3. Submitting code

To contribute code, use the pull request (PR) workflow as described below.

#### Step 1: Set up the project

- Fork the repository to your GitHub account.
- Clone your fork locally:

```sh
git clone https://github.com/your-username/myst2.git
```

- Create a new branch for your changes:

```sh
git checkout -b feature/your-feature-name
```

#### Step 2: Make changes

- Follow the project's coding style and conventions (see [style guide](#code-style-guide)).

- Write clear, concise commit messages.

- Add playground snippets or examples as needed. This is a good way to be able to test the code easily and see it in action.

#### Step 3: Lint your code

Run:

```sh
npm run lint
```

And make sure it passes with no issues. PRs with a failed lint test will be discarded.

#### Step 4: Submit a PR

- Push your branch to your fork:

```sh
git push origin feature/your-feature-name
```

- Open a pull request against the main repository's `staging` branch.

- In the PR description, include:

  - A summary of changes.
  - Reference to related issues (e.g. `Fixes #123`)
  - Any additional contexts, screenshots or relevant information.

#### Step 5: Wait

All code is inspected and approved by me so it may take some time before I get to it.

#### Step 6: Update documentation

- If your PR has been accepted, update the [documentation](#4-updating-documentation) as necessary to document your new features.

## 2. Code Style Guide

Please adhere, as strictly as physics allows at any given moment, to the following style guide when adding code to this codebase.

### 2.1. Write optimal and performant code

Write code that performs optimally. Always consider performance.

Avoid obvious things like string comparisons, duplicating memory, adding unnecessary objects to memory, having poor locality in your memory and similar. Avoid needless complexity. Use optimal algorithms and data structures. Prefer simple for loops to functional nesting, especially when dealing with realtime functions. A 6-deep for loop has significantly less overhead for the JS engine than a 6-deep functional tower.

Opposite to what you normally hear, when working on this codebase I want you to optimize early and plan ahead. Above all, this is a game engine and as such, performance is a first-class citizen and should be on your mind regardless of what you're doing. Don't do something foolish like executing expensive code 60 frames per second when better options exist. Off-load render surfaces when possible. In the myst.ui extension for example, all labels are prerendered onto surfaces because rendering text is expensive but rendering surfaces is cheap, and you only have to render text once and not 60 times per second. Use common sense and be vigilant about performance at all times.

This is a strict requirement and rule #1 for a reason.

### 2.2. Keep the code simple and try not to repeat yourself too much

This is a given but is stated here explicitly for added emphasis.

Simple, straightforward code is maintainable code and it also tends to be fast code.

### 2.3. Use tabs and only tabs to indent code

You can use spaces to align items on occasion, but always indent code with tabs.

### 2.4. Use semicolons

Some codebases go fancy with the no-semicolon style, but this is not one of them. Use semicolons as intended.

### 2.5. Stick to 80 columns as best you can

This is not strictly enforced, but highly recommended. Try to code in a way where if you shrink the editor view down to 80 columns (with 4-wide tabs), you can still read most of the code. Especially try to limit comments to the 80-column boundary. An occasional line of code may go beyond, but try to limit those instances.

### 2.6. Make variables `const` by default

Everything should be `const` by default, except the things you explicitly don't want to be `const`. Always default to `const` before using `let` if you don't already know that the variable you're going to need will change down the line. Never use `var`.

### 2.7. All-uppercase any hardcoded constants

Use an all-uppercase style on hardcoded (non-computed) constants, for example:

```JS
const SOME_STRING = "turtles";
const SOME_VALUE = 13.7;
```

Or, when used as an enum:

```JS
const RENDER_MODE = {
	FILL: 0,
	STROKE: 1,
	BOTH: 2
};
```

This goes for class members too:

```JS
export class MyClass {
// ~ private

	#SOME_STRING = "turtles";
}
```


### 2.8. Use comments

Use comments judiciously. Comments provide cognitive context for code and are as such invaluable in the long-term. The author of this project does not believe in "self-documenting code", only self-documenting mess.

Don't overuse comments. You shouldn't have `// this is bridge` followed by a bridge, but you should add comments where they add value and document what's going on or explain your thought process. Plan ahead and be mindful about accuracy so that comments are actually relevant to the code and don't become inaccurate historic artifacts. When changing code, you should update comments accordingly.

It's perfectly fine to leave a lot of code uncommented too, but only if it's obvious what it is doing. Use your best judgment.

Use proper punctuation and grammar in your comments. Capitalize your comments when they are more than a single sentence long. As a convention, capitalize comments within `/**/` blocks while keeping single-line `//` comments lowercase.

When writing comments, stick to the 80 columns (with 4-wide tabs) boundary, this is especially important for JSDoc-style comments so that documentation fits into a narrow editor view.

### 2.9. Add spaces when listing function parameters or items in an array

```JS
foo(1, 2, 'a', 'b'); // do this

foo(1,2,'a','b'); // not this
```

```JS
[1, 2, 'a', 'b'] // do this

[1,2,'a','b'] // not this
```

### 2.10. Expand, and expand a lot

If your line of code is getting long, then you should consider expanding it into multiple lines from the first bracket onward, and using an indent level for the inner items.

Examples:

```JS
return new Vector2D(
	this.x / magnitude,
	this.y / magnitude
);
```

```JS
[
	someLongLine,
	someOtherLongLine
].forEach(item => item.hi());
```

### 2.11. Break long ternary expressions into multiple lines

For example:

```JS
const canvas = (
	(options.canvas instanceof HTMLCanvasElement)
	? options.canvas // we received <canvas> directly
	: document.querySelector(options.canvas) // we probably have a query
);
```

### 2.12. When chaining functions, break the calls into lines

For example:

```JS
// draw some shapes
this.render
	.fill('orange')
	.rect(10,10,50,50)
	.stroke('blue', 2)
	.circle(100, 100, 30);
```

### 2.13. Use empty lines to separate code into logical units

For example:

```JS
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
```

Two blocks of code that do distinct things are clearly visible here, and context is immediately obvious.

### 2.14. Use the following if statement style

```JS
if (condition) {
	/* ... */
}
else if (other_condition) {
	/* ... */
}
else {
	/* ... */
}
```

### 2.15. Use the following switch statement style

```JS
switch (condition) {
	case optionA:
		/* ... */
		return;
	case optionB:
	case optionC:
		/* ... */
		break;
	case optionD:
		{
			/* larger code block */
		}
		break;
}
```

### 2.16. Use the following class style:

```JS
export class MyClass {
// ~ private

	/**
	 * Something private.
	 *
	 * @type {object}
	 * @private
	 */
	#something = null;

// ~ public

	/**
	 * Constructor is the first thing in the public block.
	 */
	constructor() {
	}

	/**
	 * Something public.
	 *
	 * @type {string}
	 */
	somethingElse = "";
}
```

Use a single blank line to visually separate items in a class.

The `// ~ private` and `// ~ public` lines are custom quirks of this codebase that denote private and public blocks in the class. Love them or hate them, but they are required. This is for easier readability down the line.

Typically a class is a private block followed by a public block. But you may also use a public block first if you want to expose, for example an enumerable property so it's visible at the top of the class. The Game class, for example is implemented like this:

```JS
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

	/* ... private code ... */

// ~ public

	/* constructor */

	/* ... public code ... */
}
```

### 2.17. Don't overuse functional styles and avoid exposing functional API

This is primarily an object-oriented codebase so your mindset needs to be objects over functions. Make your API as idiomatically object oriented as you can, within the bounds of the es6 class system. You may sprinkle functional styles on implementations (while not overusing them and turning the code into a functional mess), but do your best to avoid exposing the user API in functional ways so it stays consistent with the rest of the codebase.

In practice this usually means to expect the user to provide objects with state rather than functions. Exceptions to this rule may be applied where they make sense, but will be carefully reviewed by a team of skilled hamsters.

### 2.18. Don't use getters and setters (unless you have a very good reason)

Unless you have an exceedingly good reason to do so, you should avoid using get/set statements altogether as they can cause confusion down the line with their atypical semantics.

Note that the myst2.ui extension does use getters and setters extensively, but it's for a good cause (to make component properties reactive and make API usage easier).

In general, avoid getters and setters and prefer methods and functions.

### 2.19. Use JSDoc basically everywhere

This serves both as on-the-go documentation for future developers as well as making API documentation generation available on the fly. Try to be descriptive and consistent. See the rest of the source code and try to match the same style.

Use one of the following options to document basic parameter types:
```
/**
 * @param {boolean}
 * @param {number}
 * @param {string}
 * @param {object}
 * @param {*}
 */
```

Add empty lines between the description, the list of parameters and the return value:

```JS
/**
 * A function that does this and that.
 * 
 * @param {number} a First parameter.
 * @param {number} [b] Second, optional parameter.
 *
 * @returns {number}
 */
```

Do not use `-` between parameters and their descriptions as it is sometimes common:

```JS
// don't do this:

/**
 * @param {number} a - First parameter
 */
```

When breaking text lines in the description (to stay within 80 columns), use two spaces to indent the next line, like in this example:

```JS
	/**
	 * @param {number} [options.framerate=60] Game's framerate. Ignored when
	 *   the simple loop is used.
	 */
```

### 2.20. When adding a new file, follow these steps:

#### Step 1: Make sure the file is in /src/ and nowhere else.

If you're making a feature that has multiple components and thinking about having src/yourfeature/ - don't do it. Instead, create a library extension and then use that extension's /src/ folder for all of its functionality.

#### Step 2: Make sure the filename is all lowercase, with `_` symbols used for spaces.

Always name things `my_thing.js` and not, for example `mything.js`.

Make the file names short and descriptive. No overly long names.

#### Step 3: Add the branding header to the very top of the file

```JS
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
//  myst2/src/your_file.js
//
////////////////////////////////////////////////////////////////////////////////
```

If you are working on an engine extension, use the following header instead:

```JS
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
//  ::: EXTENSION ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//  myst2.your_extension
//
//  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//  myst2/extensions/your_extension/src/your_file.js
//
////////////////////////////////////////////////////////////////////////////////
```

#### Step 4: Add a short description of the file right below the header:

```JS
/**
 * This sourcefile does this and that.
 */
```

You may also add @author tags here:

```JS
/**
 * This sourcefile does this and that.
 *
 * @author Author1
 * @author Author2
 */
```

#### Step 5: Add an export to `src/myst2.js`:

For namespace exports:

```JS
//
// namespace exports
//

/* ... */
export * as your_namespace from './your_source.js';
```

For class exports:

```JS
//
// class exports
//

/* ... */
export { YourFeature } from './your_source.js';
```

Do the same if working on an extension, except in the main export hub of your extension (for example, `/extensions/your_extension/your_extension.js`);

### 2.21. No AI

Don't use AI-generated code in this project.

## 3. Why don't you use [my favorite autoformatter]?

While autoformatters are a necessary evil in large projects to save teams time, I consider them unholy, especially for small, passion-driven projects like this one. Code formatters tend to prioritize consistency over flexibility, which steamrolls any number of nuanced code styling choices that add to the uniqueness of the codebase.

## 4. Updating Documentation

You are expected to extensively document any features you implement in the [myst 2 wiki](https://github.com/metayeti/myst2/wiki) which serves as the official project's documentation. You will be given wiki privileges after your first PR is accepted. Use the style consistent with the rest of the wiki.

Tip: Clone from the other pages on the wiki and use them as templates.

## 5. Finding Help

You can try the #myst2 IRC channel on [Libera.Chat](https://web.libera.chat/#myst2). This is the official community channel for this game engine, but I can't guarantee activity.