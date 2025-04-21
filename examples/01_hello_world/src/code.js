import { State, Game } from 'myst2';

// create a game state
class MainState extends State {
	onDraw() {
		// clear the surface
		this.surface.clear();
		// render some shapes
		this.render
			.fill('orange').rect(10, 10, 50, 50)
			.stroke('blue', 2).circle(100, 100, 30);

	}
}

// create the game
class HelloWorldGame extends Game {
	constructor() {
		super({ // setup game
			canvas: '#game',
			state: new MainState(), // initial game state
			useSimpleLoop: true // just draw() and don't update()
		});
	}
}

// run the game
new ExampleGame().run();
