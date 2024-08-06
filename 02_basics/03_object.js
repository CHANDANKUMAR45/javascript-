// singleton
//object.create

//object literals


const mySym=Symbol("key1")
const JsUser={
    name:"chandan",
    "full name":"Chandan kumar",
    [mySym]:"mykey1",
    age:19,
    location:"Bhilai",
    email:"chandan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
    
}


//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])

 JsUser.email="chandan@chatgpt.com"   //update
 //Object.freeze(JsUser)    //no any one can change the value
 JsUser.email="chandan@microsoft.com"  

 //console.log(JsUser);

 
 JsUser.greeting=function(){
    console.log("Hello JS user");
 }

 JsUser.greetingTwo=function(){
    console.log(`Hello JS user ,${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 