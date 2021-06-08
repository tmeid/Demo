
let modal = document.querySelector('.modal'),
    img = document.querySelector('.modal img'),
    caption = document.querySelector('.modal p'),
    imgOpen = document.querySelector('.container > img');

imgOpen.addEventListener('click', function () {
    modal.style.display = 'block';
})

img.onclick = function (event) {
    event.stopPropagation();
}

caption.onclick = function (event) {
    event.stopPropagation();
}
modal.addEventListener('click', function (ele) {
    modal.style.display = 'none';
    console.log(ele.target)
})
