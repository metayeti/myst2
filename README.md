<img align="left" src="dev/logo.png?raw=true" height="95">

myst2 is a lightweight 2D game engine for the web.

v0.0.0

> [!NOTE]
> This project is a work in progress and isn't currently usable in any way, shape or form. Grab a time machine and check back at a later time.

## Features

- Works in all modern browsers
- Class based, easily extensible API
- Asset preloading and management
- Mouse, touch and keyboard input
- Persistent configuration
- Many features out of the box (math, data structures and algorithms, randomness)
- Extensions (UI, map import)

## Reference and Quick Start

Check out the [myst2 wiki](https://github.com/metayeti/myst2/wiki) for help and a quick start guide.

See the [documentation](/doc) for API reference.

## Minimal example

```JavaScript
import { Screen, Application } from 'myst2';

// create a game screen
class MyScreen extends Screen {
	onDraw() {
		// clear the surface
		this.surface.clear();
		// draw some shapes
		this.render.rectFill(10, 10, 50, 50, 'orange');
		this.render.circleFill(100, 100, 30, 'blue');
	}
}

// create the game application
class Game extends Application {
	constructor() {
		super({ // setup game
			$canvas: document.querySelector('#my-canvas'),
			useSimpleLoop: true, // just draw() screens and don't update() them
			initialScreen: new MyScreen()
		});
	}
}

// run the game
new Game().run();
```

## License

Copyright (c) 2025 Danijel Durakovic

Licensed under the terms of the [MIT license](LICENSE).
