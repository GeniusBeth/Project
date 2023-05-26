function total(arr) {
    const dark = arr.reduce((a,v) => {return a+v},0);
    return dark
 }
 
 console.log(total([1,2,3])); 

 function stringConcat(arr) {
    const light = arr.reduce((a, c) =>{return a+c}," ");
    return light;
 }
 
 console.log(stringConcat([1,2,3]));
 function totalVotes(arr) {
    // your code here    
 }
 
 
 ar = [1,2,3,4,5]
 const l= ar.reduce((a,s) =>{return a+1})
 console.log(l) 

 function totalVotes(arr) {
    const zed = arr.reduce((q,n) =>{ 
         return n.voted==true?q+1:q},0)  
    return zed
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); 

 function shoppingSpree(arr) {
   const miss = arr.reduce((acc, cv) => {
    return  acc + cv.price
   },0); 
   return miss;  
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

function flatten(arr) {
   const mr = arr.concat().reduce((acm, curv) => {
return acm + curv;
     },[]);     
   return mr ;
}
                                     
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   const numYoung = 0;
  //const happy = [ "numYoungVotes" ,"numYoung" ,"numOfMiddleAgeVotes","numOfMiddleAge","numOfOldVotes", "numOfOld"]
 // nim = arr.reduce((ar, ce) => { 
  // if (ce.age >=18 && ce.age <=25)return () 
// },{})
 // return nim;
 const result = {};
 const happy = ["numYoungVotes" ,"numYoung" ,"numOfMiddleAgeVotes","numOfMiddleAge","numOfOldVotes", "numOfOld"];
 for(ar of happy){
   happy.push(result)


   //if (ar.age >=18 && ar.age <=25)
 }
}


