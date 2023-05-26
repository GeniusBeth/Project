//  const byTagName = document.getElementsByTagName('h1');
//  console.log(byTagName);
//  const queryAll = document.querySelectorAll('div');
//  console.log(queryAll);f
// const selectQuery = document.querySelectorAll('div');
// for(let i=0; i<selectQuery.length; i++){
// selectQuery[i].style.color = 'green';
// console.log(selectQuery);
// } 
const tag = document.querySelector('ul');
//const tad = document.createElement('li');
//tag.append(tad)
//tag.innerText ='Star';
// ---it gives the same attribute as the one mentioned e.g  X-men takes the same attribute as the main id( in h1 tag)---
 tag.setAttribute( 'id' ,'main');
// ---removes the attribute that was set---
tag.removeAttribute('id');
// const title = document.querySelector('#main');
// title.getAttribute('id');
//--to add element through a class--
// tad.classList.add('the name of your classname')

//--to remove the class element--
// tad.classList.remove('the name of your classname')

//--to check if the element added or removed is still there
// tad.classList.contains('the name of your classname')
//--to remove elements--
// tad.remove();
// const play = document.querySelector('ul');
// console.log(play.parentNode.parentNode);
// console.log(play.parentElement.parentElement);