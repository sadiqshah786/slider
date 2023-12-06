
let images = document.querySelectorAll('.slide');
let nextBtn = document.getElementById('next')
console.log(nextBtn)
let counter = 0;
images.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPre = () => {
    // if(counter>0){
        counter--;
        imagesSlide();
    // }
   
};

const goNext = () => {
    counter++;
    imagesSlide();
};

function imagesSlide() {
    images.forEach((slides, index) => {
        console.log(counter, images.length);
        if (counter === images.length) {
            console.log("hogye",nextBtn)
            nextBtn.setAttribute('disabled', ''); 
        }
        else{
            nextBtn.removeAttribute('disabled', ''); 
            slides.style.transform = `translateX(-${counter * 100}%)`;
        }
    });
}
