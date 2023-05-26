
// let send = (message) => {
//     console.log("i am happy");
// //    return message();
// }
// let receive = () => {
// console.log("always");
// }
// send(receive());


                // CALLBACK HELL

// let stock ={
//     Fruits: ["strawberry" , "grapes" , "banana" , "apple"],
//     liquid: ["water" , "ice"],
//     holder: ["cone" , "cup" , "stick"],
//     toppings: ["chocolate" , "peanuts"]
// };
// let order = (fruit_name , call_production) => {
 
//     setTimeout(()=>{
//         call_production();
//         console.log(`${stock.Fruits[fruit_name]} was selected`)
//     },2000);
// };

// let production = ()=>{
//     setTimeout(() =>{
//         console.log("Production has started");
//          setTimeout(()=>{
//         console.log("The Fruit has been chopped");
//         setTimeout(()=>{
//             console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);
//             setTimeout(() =>{
//                 console.log("The machine was started");
//                 setTimeout(()=>{
//                     console.log(`${stock.holder[0]} was used`);
//                     setTimeout(() =>{
//                         console.log(`${stock.toppings[0]} was added`);
//                         setTimeout(() =>{
//                             console.log("The Ice-cream was served")
//                         },2000);
//                     },3000);
//                 },2000);
//             },1000);
//         },1000);
//     },2000);
//     },0);


// };
// order(0 , production);


let stock ={
    Fruits: ["strawberry" , "grapes" , "banana" , "apple"],
    liquid: ["water" , "ice"],
    holder: ["cone" , "cup" , "stick"],
    toppings: ["chocolate" , "peanuts"]
};
let is_shop_open = true;
let order = (time , work) =>{
    return new Promise((resolve, reject) =>{
        if(is_shop_open){
            setTimeout(() =>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log("Our shop is closed for the day"));
        }
    });
}
order(0 , ()=>console.log(`${stock.Fruits[0]} was selected`))
.then(() => order(2000 ,() => console.log("Production has started")))
.then(() => order(2000 , () => console.log("The Fruit has been chopped")))
.then(() => order(1000 , () => console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`)))
.then(() => order(1000 , () => console.log("The machine was started")))
.then(() => order(2000 , () => console.log(`The ice-cream was placed on the ${stock.holder[0]}`)))
.then(() => order(3000 , () => console.log(`${stock.toppings[0]} was added as toppings to ice-cream`)))
.then(() => order(2000 , () => console.log("Ice-cream was served")))

.catch(() => console.log("customer left"))
.finally(() => console.log("Our shop is closed for the day"))