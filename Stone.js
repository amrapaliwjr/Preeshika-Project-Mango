class Stone{
    constructor(x, y,r) {
        var options = {
            'isStatic':false,
            'restitution':0.6,
            'friction':1.0,
            'density':2
        }
        this.x=x;
	      this.y=y;
		    this.r=r
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      
      display(){
        
        var stonePos = this.body.position;
        push();
        translate(stonePos.x, stonePos.y);
        imageMode(CENTER);
        image( this.image,0, 0, this.r,this.r);
        //ellipseMode(RADIUS);
        //ellipse(0,0, this.r);
        pop();
      }
 }
 