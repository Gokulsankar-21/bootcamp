// var subsciber='gokul';
// alert("Welcome to Our Bootcamp "+subsciber)

window.onload=function(){

    // function => set of task | set of line
    const menu_Bar=document.querySelector('.right-bar');
    const mobile_Nav=document.querySelector('.Mobile-nav')
 
    // here events happen
    menu_Bar.addEventListener('click',function(){
        menu_Bar.classList.toggle('is-active');
        mobile_Nav.classList.toggle('is-active');
    });
};