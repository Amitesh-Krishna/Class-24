class Log{

	constructor(x,y,height,angle){

		var bounciness = {restitution:0.6, friction: 1.5, density: 1};
		this.body = Bodies.rectangle(x,y,20,height,bounciness);
		this.width = 20;
		this.height = height;
		this.angle = angle;
		World.add(world,this.body);
		this.pos = this.body.position;
		Matter.Body.setAngle(this.body,angle);

	}

	display(){

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