class Governor{



static honest(){
console.log('Governors must be honest and trustworthy.');
}

static loyal(){
  console.log('Governors must have loyalty to their state.');
}

static wellSpoken(){
  console.log('Governors must be well spoken.');
}


}
Governor.honest()
Governor.loyal()
Governor.wellSpoken()





 class Person{
     constructor(name,age,height){
     this.name = name,
    this.age = age,
     this.height =height
   }

 sleep(){
 console.log('People must get enough sleep in order to function properly.');
 }

 eat(){
 console.log('People must eat in order to have energy throughout the day');
 }

 walk(){
 console.log('People should walk daily as a form of light exercise.');
 }
 }

 class PostalWorker extends Person{

   walks(){
    console.log(`${this.name} tend to walk a bit throughout his day.`);
   }

   drives(){
    console.log(`${this.name} also tend to drive throughout his day.`);
   }
 }

 class Chef extends Person{
  cooks(){
    console.log(`${this.name} enjoys spending time in the kitchen.`);
  }

  cleans(){
    console.log(`${this.name} doesnt enjoy cleaning as much as she does cooking`);
  }
 }

const PostalWorker1 = new PostalWorker ('Mike',24,'6 feet');
const PostalWorker2 = new PostalWorker ('John',25,'6 feet');

const Chef1= new Chef ('Sarah', 26, '5 feet');
const Chef2= new Chef ('Lila', 25, '5 feet') 

console.log(Chef1);
console.log(Chef2);

console.log(PostalWorker1);
console.log(PostalWorker2);


PostalWorker1.walks();
PostalWorker1.drives();
PostalWorker2.walks();
PostalWorker2.drives();


Chef1.cooks();
Chef1.cleans();
Chef2.cooks();
Chef2.cleans();