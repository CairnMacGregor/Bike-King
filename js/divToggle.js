// Content test
const content = document.getElementsByClassName("test-div")
let b1 = document.getElementById("toggle-1");
let b2 = document.getElementById("toggle-2");
let b3 = document.getElementById("toggle-3");


b1.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.add('btn_active')
    b2.classList.remove('btn_active')
    b3.classList.remove('btn_active')
    content[0].classList.add('show')
    content[1].classList.remove('show')
    content[2].classList.remove('show')
});

b2.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.remove('btn_active')
    b2.classList.add('btn_active')
    b3.classList.remove('btn_active')
    content[0].classList.remove('show')
    content[1].classList.add('show')
    content[2].classList.remove('show')
});

b3.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.remove('btn_active')
    b2.classList.remove('btn_active')
    b3.classList.add('btn_active')
    content[0].classList.remove('show')
    content[1].classList.remove('show')
    content[2].classList.add('show')
});