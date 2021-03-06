class Block {
    constructor(x, y, width, height, angle) {
        var options = 
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 400;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<3)
        {
          var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         rectMode(CENTER);
         fill(234, 76, 70);
         stroke("black")
         strokeWeight(3);
         rect(0, 0, this.width, this.height);
         pop();
        }
        else
        {
         World.remove(world,this.body);
         push();
         this.visibility=this.visibility-5;
         tint(400,this.visibility);
         pop();  
        }

      }
}