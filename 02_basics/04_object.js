//const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="mohan"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"chandan",
        lastname:"kumar",
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2) //method1
//const obj3=Object.assign({},obj1,obj2) //method2 achchh h

// in detail link :-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj3={...obj1,...obj2} // method3 mostly use

//const obj3=Object.assign({},obj1,obj2,obj4)


//console.log(obj3);

const user=[
    {
        id:1,
        email:"C@gmail.com"
    },
    {
        id:1,
        email:"C@gmail.com"
    },
    {
        id:1,
        email:"C@gmail.com"
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));




