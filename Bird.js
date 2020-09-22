class Bird{

	constructor(x,y){

		var bounciness = {restitution:0.6, friction: 0.3, density: 1};
		this.body = Bodies.rectangle(x,y,35,35,bounciness);
		this.width = 35;
		this.height = 35;
		World.add(world,this.body);
		this.pos = this.body.position;

	}

	display(){

		this.angle = this.body.angle;
		this.pos.x = mouseX;
		this.pos.y = mouseY;
		push();
		translate(this.pos.x,this.pos.y);
		rotate(this.angle);
		rectMode(CENTER);
		strokeWeight(4);
		stroke("green");
		fill("red");
		rect(0,0,this.width,this.height);
		pop();

	}
}