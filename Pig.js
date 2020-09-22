class Pig{

	constructor(x,y){

		var bounciness = {restitution:0.6, friction: 0.3, density: 1};
		this.body = Bodies.rectangle(x,y,40,40,bounciness);
		this.width = 60;
		this.height = 60;
		World.add(world,this.body);
		this.pos = this.body.position;

	}

	display(){

		this.angle = this.body.angle;
		push();
		translate(this.pos.x,this.pos.y);
		rotate(this.angle);
		rectMode(CENTER);
		strokeWeight(4);
		stroke("orange");
		fill("green");
		rect(0,0,this.width,this.height);
		pop();

	}
}