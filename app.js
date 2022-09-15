const images =  [
    `images/pic-1.jpg`,
    `images/pic-2.jpg`,
    `images/pic-3.jpg`,
    `images/pic-4.jpg`,
    `images/pic-5.jpg`,
    `images/pic-6.jpg`,
    `images/pic-7.jpg`,
    `images/pic-8.jpg`,
    `images/pic-9.jpg`,
];
const sliderImage = document.getElementById('carousel-id');
let img =0;
setInterval( ()=>{
  const image = images[img++];
  console.log(image)
if (img === images.length){
    img =0; 
}
sliderImage.setAttribute('src', image)

},1000)