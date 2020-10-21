// Buttons
const content = document.getElementsByClassName("test-div")
let b1 = document.getElementById("toggle-1");
let b2 = document.getElementById("toggle-2");
let b3 = document.getElementById("toggle-3");
let b4 = document.getElementById("toggle-4");
let b5 = document.getElementById("toggle-5");

// Toggles
b1.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.add('btn_active')
    b2.classList.remove('btn_active')
    b3.classList.remove('btn_active')
    b4.classList.remove('btn_active')
    b5.classList.remove('btn_active')
    content[0].classList.add('show')
    content[1].classList.remove('show')
    content[2].classList.remove('show')
    content[3].classList.remove('show')
    content[4].classList.remove('show')
});

b2.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.remove('btn_active')
    b2.classList.add('btn_active')
    b3.classList.remove('btn_active')
    b4.classList.remove('btn_active')
    b5.classList.remove('btn_active')
    content[0].classList.remove('show')
    content[1].classList.add('show')
    content[2].classList.remove('show')
    content[3].classList.remove('show')
    content[4].classList.remove('show')

});

b3.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.remove('btn_active')
    b2.classList.remove('btn_active')
    b3.classList.add('btn_active')
    b4.classList.remove('btn_active')
    b5.classList.remove('btn_active')
    content[0].classList.remove('show')
    content[1].classList.remove('show')
    content[2].classList.add('show')
    content[3].classList.remove('show')
    content[4].classList.remove('show')
});

b4.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.remove('btn_active')
    b2.classList.remove('btn_active')
    b3.classList.remove('btn_active')
    b5.classList.remove('btn_active')
    b4.classList.add('btn_active')
    content[0].classList.remove('show')
    content[1].classList.remove('show')
    content[2].classList.remove('show')
    content[3].classList.add('show')
    content[4].classList.remove('show')
    
});

b5.addEventListener("click", () =>{
    console.log("Click")
    b1.classList.remove('btn_active')
    b2.classList.remove('btn_active')
    b3.classList.remove('btn_active')
    b4.classList.remove('btn_active')
    b5.classList.add('btn_active')
    content[0].classList.remove('show')
    content[1].classList.remove('show')
    content[2].classList.remove('show')
    content[3].classList.remove('show')
    content[4].classList.add('show')
});