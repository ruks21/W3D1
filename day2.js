class Cat{
 constructor (color,name,age){
  this.color=color;
  this.name=name;
  this.age=age;
 }
 //methods
 play(){
  console.log(`${this.name} likes to play.`);
 }
 sleep(){
  console.log(`${this.name} likes to sleep during the day.`);
 }
 getAge(){
  console.log(`${this.name} is ${this.age} years old.`);
 }
}
//instances
const cat1 = new Cat('gray','Raya',2);
const cat2 = new Cat('black','Nova',3);

console.log(cat1);
console.log(cat2);
//invoke
cat1.play();
cat1.sleep();
cat1.getAge();

cat2.play();
cat2.sleep();
cat2.getAge();


class Pirate{
  constructor(name,age,height){
    this.name = name;
    this.age = age;
    this.height=height;
  }

getHeight(){
console.log(`${this.name} is ${this.height} feet tall.`);
}

getAge(){
console.log(`${this.name} is a stuborn old pirate who is ${this.age} years old.`); 
}

hobby(){
  console.log(`${this.name} likes hunting treasure.`);
}

}



const jollyRoger = [
new Pirate('Jack Sparrow',25, 6),
new Pirate('John',27,5),
new Pirate('James',24,4)

]

const blackPearl = [
  new Pirate('Samantha',20, 5),
  new Pirate('Suzie',21,6),
  new Pirate('Holly',24,4)

  ]

jollyRoger.forEach ((pirate) => {
  console.log(`name: ${pirate.name}, age: ${pirate.age}, height: ${pirate.height}`);
})

blackPearl.forEach ((pirate) => {
  console.log(`name: ${pirate.name}, age: ${pirate.age}, height: ${pirate.height}`);
})


