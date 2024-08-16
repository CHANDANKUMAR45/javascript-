//for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

//for(const num of arr)
    //console.log(num);


    const greeting ="Hello world!"
    for(const greet of greeting)
    {
        if(greet==' ')
            continue
       // console.log(`Each char is ${greet}`);
}
   
//Maps=>mdn padh lo

const map=new Map()
map.set("IN",'India')
map.set('USA',"United States of America")
map.set('Fr',"France")
//console.log(map);

//for(const [key,value] of map)
   //console.log(key,':-',value);

const myObject = {

    game1:'NFS',
    game2:'Spiderman'

}


//note:- object pe for each loop kam nhi karta h    
// for(const [key,value] of myObject)  
//    console.log(key,':-',value);
