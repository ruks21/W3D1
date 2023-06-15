class Cat{
constructor(name,color,age){
this.name = name;
this.color = color;
this.age = age;
}


//methods- create them like a function  ${interpolation}
play(){
  console.log(`${this.name} enjoys playing outside.`);
}

sleep(){
console.log(`${this.name} is ${this.age} years old and enjoys taking naps.`);
}

eat(){
  console.log(`${this.name} is a ${this.color} cat that loves to eat.`);
}
}
 
//create 2 instances
 const cat1= new Cat('Raya','black',1);
 const cat2= new Cat('Lala','gray',3);

 console.log(cat1,cat2);
 //console.log(cat2);

//invoke each method from both instances.
cat1.play();
cat1.sleep();
cat1.eat();

cat2.play();
cat2.sleep();
cat2.eat();

// Constructors
class Pirate{

constructor(name,age,weapon){
this.name = name;
this.age = age;
this.weapon = weapon;

}

fight(){
console.log(`${this.name} loves to fight at sea.`);
}

steal(){
console.log(`${this.name} just stole a ${this.weapon}`);
}

sail(){
console.log(`${this.name} is ${this.age} years old and spent half those years sailing. `);
}
}

//instantiate 2 arrays of 3 pirates
const jollyRoger = [
new Pirate  ('Jason',40,'rifle'),
new Pirate  ('John', 36, 'knife'),
new Pirate  ('Smith', 30, 'sword')
]

const blackPearl = [
  new Pirate  ('Barbie',25,'sparkly dust'),
  new Pirate  ('Cinderella', 25, 'grenade'),
  new Pirate  ('Hollow', 27, 'bomb')
  ]

  jollyRoger.forEach((Pirate) => {
    console.log(` name:${Pirate.name}, age:${Pirate.age}, weapon:${Pirate.weapon}`);
  });

  blackPearl.forEach((Pirate) => {
    console.log(` name: ${Pirate.name}, age:${Pirate.age}, weapon:${Pirate.weapon}`);
  });


  