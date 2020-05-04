class Ball {
  constructor(x,y) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.Ellipse(x,y,10,10,options)
    this.radiusX = this.radiusY = 10;
    World.add(world,this.body);
  }

  display() {
     var pos = this.body.position;
     fill(255);
     stroke(0);
     ellipse(x,y,this.radiusX,this.radiusY);
  }
}
