class Box{

	constructor(x,y,width,height){

		var bounciness = {restitution:0.6, friction: 0.3, density: 1};
		this.body = Bodies.rectangle(x,y,width,height,bounciness);
		this.width = width;
		this.height = height;
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
		stroke("green");
		fill("orange");
		rect(0,0,this.width,this.height);
		pop();

	}
}