
const user={
    username:"chandan",
    price:999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website `);
         console.log(this);
         
    }
}

// user.welcomeMessage()
// user.username="sham"
// user.welcomeMessage()

//console.log(this);

// function chai()
// {
//     let username="chandan"
//     console.log(this.username);
    
// }

// chai()

const chai=()=>{
    
    let username="chandan"
    console.log(this.username);
}
//chai()

//basic arrow function
//  const addTwo=(num1,num2)=>{
//     return num1+num2
//  }

//const addTwo=(num1,num2)=>num1+num2

//const addTwo=(num1,num2)=>(num1+num2)  //implicity return without using return keyboard
//console.log(addTwo(3,4))
 

const addTwo=()=>({username:"hitesh"})
 console.log(addTwo())

