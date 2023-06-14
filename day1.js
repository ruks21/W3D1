

//2
function maxOfThree(x,y,z){
if (x>=y) {
  return x;
}
if (y>=z){
  return y;
}
else{
  return z;
}
}

console.log(maxOfThree(1,2,3));



//3
function isCharAVowel(char){
if (char === 'a' || char === 'e' || char === 'i' ||char=== 'o' || char === 'u'){
  return 'This is a vowel.';
}
else{
  return 'This is not a vowel.';
}

}

console.log(isCharAVowel('a'));



 //4*
 const sumArray= function(array){
   let sum=0;
   for (let i = 0; i < array.length; i++) {
      sum += array[i]; 
  }
  return sum;
 }
console.log(sumArray([1,2,3]));


//5
const multiplyArray= function(array){
  let multiply=1;
  for (let i = 0; i < array.length; i++) {
     multiply *= array[i]; 
 }
 return multiply;
}
console.log(multiplyArray([2,4,5]));


//6
const numArgs= function (){
  return arguments.length;
}

console.log(numArgs(7,5,3));