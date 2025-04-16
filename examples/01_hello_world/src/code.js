import { State, Game } from 'myst2';

// create a game state
class ExampleState extends State {
	onDraw() {
		// clear the surface
		this.surface.clear();
		// draw some shapes
		this.render.rectFill(10, 10, 50, 50, 'orange');
		this.render.circleFill(100, 100, 30, 'blue');
	}
}

// create the game
class ExampleGame extends Game {
	constructor() {
		super({ // setup game
			canvas: '#game',
			state: new ExampleState(), // initial game state
			useSimpleLoop: true // just draw() and don't update()
		});
	}
}

// run the game
new ExampleGame().run();