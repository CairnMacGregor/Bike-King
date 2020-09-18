// Get elements for the Navbar Functionality

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const navSearch = document.getElementById("nav_search") 


//Navbar search :((
navSearch.addEventListener("click", () => {
    console.log("Clicked")
    alert("This functionality has not yet been added")
}
);

//Navbar toggle
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
});
