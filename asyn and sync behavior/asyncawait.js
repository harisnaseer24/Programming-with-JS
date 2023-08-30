//async await


// async written before nearest block
// await written before the statement u want to execute after some time


// async function add(){
// let a=45;
// let b=55;
// await console.log("bye")
//  let result=a+b;
// await console.log(result)
// }
// add();
// console.log("hi")





// async function add(){
//         let a=14;
//         let b=64;
//         let c= a + b;
//  await     console.log("your answer is ...");
//         console.log(c);
//     }
    
//     console.log("please wait")
//     add();
    
//     console.log("here is your answer");
//     console.log("ye lo answer");

//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");
//     console.log("here is your answer");
//     console.log("ye lo answer");

// fetch("https://dummyjson.com/products")
// .then(res=>
//     res.json()

// ).then(json=>
//     console.log(json))





// (async function(){
//     let raw=await fetch("https://dummyjson.com/users");
// let user= await raw.then(res=>res.json()).then(json=>console.log(json))
// console.log(user)

// })


// 
// let user2=JSON.stringify(user);
// console.log(user2)







// let list=document.getElementById("list")
// let products = fetch('https://dummyjson.com/products/1')
// let a=products.then(res => res.json())
// .then(json =>{

//     for (const b in json) {
//   if(b=="images")    {
//     list.innerHTML+=`

// <li><img src="${json[b][0]}" width="1000"></li>


// `
// }   
// else{ 
// list.innerHTML+=`

// <li >${b +" : "+json[b]}</li>

// `

// } 
          
        
//     }
   
    
    
    
    // })







// let b=a.then(data=>console.log(data))
// // b.then(data=>console.log(b))


(async function(){
    let list=document.getElementById("list");
await fetch('https://dummyjson.com/products/1').then(resp=>resp.json()).then(json=>console.log(json))
})()