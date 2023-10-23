let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');
let clones = [];

let sliderContainerWidth = sliderContainer.clientWidth;
let elementToShow = 4;

let cardWidth = sliderContainerWidth/elementToShow;


slider.style.width = cards.length*cardWidth+'px';

for(let index = 0; index < cards.length; index++){
    const element = cards[index];
    element.style.width = cardWidth+'px';
}

cards.forEach(card => {
    let clone = card.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
});

function getCloneWidth() {
    let width = 0;
    clones.forEach(clone => {
        width -= clone.offsetWidth;
    })
    return width;
}

function prev(){
    slider.style.marginLeft =  ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'; //100px

}
function next() {
    slider.style.marginLeft =  ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}

