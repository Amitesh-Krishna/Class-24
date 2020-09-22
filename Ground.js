class Ground{

	constructor(x,y,width,height){

		var staticObj = {isStatic: true}
		this.body = Bodies.rectangle(x,y,width,height,staticObj);
		this.width = width;
		this.height = height;
		World.add(world,this.body);
		this.pos = this.body.position;

	}

	display(){

		rectMode(CENTER);
		fill("brown");
		rect(this.pos.x,this.pos.y,this.width,this.height);

	}
}