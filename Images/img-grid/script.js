let btns = document.querySelectorAll('.btns button');
let columns = document.querySelectorAll('.column');


function changeCol(ele){
    // convert string to number
    let totalCol = Number(ele.textContent);
    
    columns.forEach( col => {
        col.style.width = 100 / totalCol + '%';
    });

    // remove active class on every button
    btns.forEach( btn => {
        btn.classList.remove('active');
    });

    // only add the active class on the button being pressed

    ele.classList.add('active');

        
}
