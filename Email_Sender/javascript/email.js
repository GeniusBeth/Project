// const liHover = document.querySelector('.list');
 // element.addEventListener("mouseover" , function)
// function hoverState(){
//     list.style.background ='rgba(0, 117, 214, 12%)';
// }
// liHover.addEventListener("mouseover" , hoverState);
const swiper = new Swiper('.swiper', {
  // Optional parameters
slidesPerView:3,

//   spaceBetween: 10,
slidePerGroupSkip:3,
direction: 'horizontal',
loop: false,

  // If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
  // Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});
document.querySelectorAll('.bgi').forEach(async el =>{
    el.addEventListener('click' , async (e) => {
        let pictures = await findPhotos('dog')
        let result = ``
        pictures?.photos?.forEach(e =>{
            result += `<div class='image'><img src="${e?.src?.small}" width='100%'></div>`
        })
        document.querySelector('.image-holder').innerHTML=result
        console.log(result,pictures)
        console.log(document.querySelector('.image-holder'))
        
    });
});

// bgClick();

// function bgClick(){
// };
async function findPhotos(query){
    try {
    let res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`,
        {
            method: 'GET',
            headers: {
                Authorization: 'ndD1H6EVUGAyyKGiGDTSqIPQoyP1RFEMqv9i5qWtY9XclsgaEFOy2PP9'
            }
        })  
        return await res.json()
    } catch (err) {
        console.error(err)   
    } 
} 
// const photo = await findPhotos('weirdos')   
// console.log(photo);

const pickr = Pickr.create({
    el: '.bgc',
    useAsButton: true,
    theme: 'nano', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true
        }
    }
});

pickr.on('change', (color, source, instance) => {
    const rgbaColor = color.toRGBA().toString();
    const col = document.querySelectorAll('.class')
    for(i=0; i<col.length; i++){
        col[i].style.background = rgbaColor;
        console.log(col);
    }    
});

const file = document.querySelector('#file');
var uploaded_image = '';

file.addEventListener("change", function(){
    const reader = new FileReader();
    console.log("😁😀 CHIOMA the OCD LADY")
    console.log('Chioma the girl that talks to AI dare 😉😉😉 is the leader of weirdos!');
    reader.addEventListener('load', () =>{
        uploaded_image = reader.result;
        console.log(document.activeElement)
        document.querySelectorAll('.card-body-bg').forEach(e => e.style.backgroundImage = `url(${uploaded_image})`)
    })
    reader.readAsDataURL(this.files[0]);
})
// forEach(col => {
//          col.addEventListener('click' , (e) => {
    // .style.card = rgbaColor;
    // const selectQuery = document.querySelectorAll('div');
// for(let i=0; i<selectQuery.length; i++){
// selectQuery[i].style.color = 'green';
// console.log(selectQuery);
const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs'
});

const addNchildren = n =>{
    const child =  document.createElement("div")
    child.classList.add("card-wrapper","swiper-slide")
    child.innerHTML=
    `<div class="card-container">
        <div class="card">
            <div class="image-content">
                <div class="card-image">
                    <img src="../Images/tincan_logo.png" width="100%" class="card-img">
                </div>
                <div class="card-text-body" contenteditable id="editableTemplate-${i}"></div>
                <div class="card-content">
                    <Footer class="footer"></Footer>
                </div>
            </div>
        </div>
    </div>`
    for (let i = 0; i< n; i++) {
        child.id = "child0"+i
        document.querySelector("#mother").appendChild(child)
    }
 
 
}
document.addEventListener("load",e=>{
    // addNchildren(1000)
})