<img align="left" src="dev/logo.png?raw=true" height="95">

## myst2

myst2 is a lightweight 2D game engine for the web.

> [!NOTE]
> This project is a work in progress and isn't currently usable in any way, shape or form. Grab a time machine and check back at a later time.

## Features

- Zero dependencies
- Works in all modern browsers
- Class based, easily extensible API
- Asset preloading and management
- Mouse, touch and keyboard input
- Persistent configuration
- Many features out of the box
- Extensions

## Reference and Quick Start

Check out the [myst2 wiki](https://github.com/metayeti/myst2/wiki) for help and a quick start guide.

See the [documentation](/doc) for API reference.

## Minimal example

```JavaScript
import { State, Application } from 'myst2';

// create a game state
class MyState extends State {
	onDraw() {
		// clear the surface
		this.surface.clear();
		// draw some shapes
		this.render
			.fill('orange').rect(10, 10, 50, 50)
			.stroke('blue', 2).circle(100, 100, 30);
	}
}

// create the game
class MyGame extends Game {
	constructor() {
		super({ // setup game
			canvas: '#my-canvas',
			state: new MyState(), // initial game state
			useSimpleLoop: true // just draw() and don't update()
		});
	}
}

// run the game
new MyGame().run();
```

## Credits

- [howler.js](https://howlerjs.com/) - audio library used in some examples

## License

Copyright (c) 2025 Danijel Durakovic

Licensed under the terms of the [MIT license](LICENSE).
