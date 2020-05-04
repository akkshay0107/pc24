// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var engine,world;
engine = Engine.create();
world = engine.world;

function setup() {
 var canvas = createCanvas(1200,400);
 ground1 = new Ground(600,390,1200,20);
 tanker = new Tanker(250,200);
  // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background(0);
    Engine.update(engine);
    ground1.display();
    tanker.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
 // Call the shoot method for the cannon.
}