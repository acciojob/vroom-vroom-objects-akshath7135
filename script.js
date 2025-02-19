class Car{
	constructor(make, model){
		this.make=make;
		this.model=model;
	}
	getMakeModel(){
		return this.make+" "+this.model;
	}
}
class SportsCar extends Car{
	constructor(make, model, topSpeed){
		super(make,model);
		this.topSpeed=topSpeed;
	}
	getTopSpeed(){
		return this.topSpeed;
	}
}

window.Car = Car;
window.SportsCar = SportsCar;

let car = new SportsCar("Ferrari","Red",250);
console.log(car.getMakeModel());
console.log(car.getTopSpeed());
