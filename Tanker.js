class Tanker {
  constructor(x, y) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,160,80);
     World.add(world,this.body);
    };

    display(){
    var posx =this.body.position.x;
    var posy =this.body.position.y;
    rectMode(CENTER);
    fill(230);
    rect(posx+20,posy-25,100,10);
    rect(posx,posy-25,80,30);
    rect(posx,posy+15,160,50);
    };
}
