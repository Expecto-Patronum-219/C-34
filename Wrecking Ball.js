class WBall{
    constructor(x, y) {
        var options = {
            'frictionAir':0.0005,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 60, options);
        this.radius = 60;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}