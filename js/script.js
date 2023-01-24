let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}





// // textShadow: 
// const allFilterItems = document.querySelectorAll(".filter-item");
// const allFilterBtns = document.querySelectorAll(".filter-btn");

// window.addEventListener("DOMContentLoaded", () => {
//   allFilterBtns[0].classList.add("active-btn");
// });

// allFilterBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     showFilteredContent(btn);
//   });
// });

// function showFilteredContent(btn) {
//   allFilterItems.forEach((item) => {
//     if (item.classList.contains(btn.id)) {
//       resetActiveBtn();
//       btn.classList.add("active-btn");
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }

// function resetActiveBtn() {
//   allFilterBtns.forEach((btn) => {
//     btn.classList.remove("active-btn");
//   });
// }