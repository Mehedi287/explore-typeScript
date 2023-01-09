// today we talk about class and constructor in js 
class Car  {
    constructor(name:string,model:number,prize:number,color:string) { 
        this.name = name;
        this.model = model;
        this.color = color;
        this.prize = prize;
    }
  run() { // its called mehtod  
        console.log(`${this.name} is runnng now its model: ${this.model} and its color is ${this.color}`);
        
    }
}
const tesla = new Car("Tesla", "green");
const  toyota = new Car("toyota", "blue");
const  panda = new Car("panda", "red");
const roulsRoyes = new Car("roulsRoyes", "asd");
const zip = new Car("zip", "sdf");
console.log(tesla.run());
console.log(toyota.run());
console.log(panda.run());
console.log(roulsRoyes.run());
 

  
 
