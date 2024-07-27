const name="chandan-ck "
const repoCount=50

//console.log(name + repoCount+ " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//method2
const gameName=new String('chandan')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// // console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString=gameName.substring(0,4)
console.log(newString)

const anoherString=gameName.slice(-7,-4)
console.log(anoherString);

const newStringOne="      chnadan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/chandan%20kumar"

console.log(url.replace('%20','-'));

console.log(url.includes('chandan'));


console.log(gameName.split('-'));