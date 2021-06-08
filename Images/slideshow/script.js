
let prev = document.querySelector('.prev'),
    next = prev.nextElementSibling,
    // left property value of imgs element
    current = 0,
    imgs = document.querySelector('.imgs'),
    data = {
        '0': [1, "Team"],
        '-100': [2, "Teammm"],
        '-200': [3, "Thu Duyen"]
    };

prev.addEventListener('click', function () {
    // if img 1 is shown, press prev btn will move to img 3
    if (current == 0) {
        // update css
        imgs.style.left = "-200%";
        // update current
        current = -200;
    }
    else {
        imgs.style.left = current + 100 + '%';
        // update current
        current = current + 100;
    }
    updateContext();
    activeState(current / (-100));


});

next.addEventListener('click', function () {
    // if img 3 is shown, press next btn will move to img 1
    if (current == -200) {
        imgs.style.left = "0";
        current = 0;
    }
    else {
        imgs.style.left = current - 100 + '%';
        current = current - 100;
    }
    updateContext();
    activeState(current / (-100));
});

function pressBtn(pos, ele) {
    imgs.style.left = pos + '%';
    current = pos;
    updateContext();

    let btns = document.querySelectorAll('.btns button');
    for (let btn of btns)
        btn.classList.remove('active');

    ele.classList.add('active');

}

// update id of img (1/3 - 2/3 - 3/3)
// update caption
function updateContext() {
    let caption = document.querySelector('.caption'),
        num = document.querySelector('.num');

    caption.textContent = data[current][1];
    num.textContent = data[current][0];
}

function activeState(index) {
    let btns = document.querySelectorAll('.btns button');
    for (let btn of btns)
        btn.classList.remove('active');

    btns[index].classList.add('active');
}

