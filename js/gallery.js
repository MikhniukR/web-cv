const directory = 'images/';
const images = [
    'my_photo.png',
    'roller_skates.png',
    'ping_pong.png',
    'cube.png',
];

let index = 0;
let photo = document.querySelector('.my_photo img');

photo.addEventListener("click", function () {
    index += 1;
    index %= images.length;
    photo.src = directory + images[index];
    if (index == 0) {
    	photo.style.borderRadius = "70%";
    }
    else {
    	photo.style.borderRadius = "0%";
    }
});

