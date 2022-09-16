
//Navbar, Menu
const navbar = document.getElementById('li');
const button = document.getElementById('burger');
button.onclick = function(){
    button.classList.toggle('active');
    navbar.classList.toggle('active');
}


// Products

const imgpink = () =>{
    document.getElementById("img-pink").style.display='block';
    document.getElementById("img-black").style.display='none';
}
const imgblack = () =>{
    document.getElementById("img-pink").style.display='none';
    document.getElementById("img-black").style.display='block';
}


const imgpink2 = () =>{
    document.getElementById("img-pink2").style.display='block';
    document.getElementById("img-black2").style.display='none';
}
const imgblack2 = () =>{
    document.getElementById("img-pink2").style.display='none';
    document.getElementById("img-black2").style.display='block';
}