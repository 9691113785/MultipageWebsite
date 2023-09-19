
// togglenavbar
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbartoggle');
var i = 1;
navbarToggle.addEventListener('click', () => {
    if (i % 2 != 0) {
        navbarLinks.style.display = "flex";
    }
    else {
        navbarLinks.style.display = "none";
    }
    i++;
});


// slider
const images = [
    "https://wallpapercave.com/dwp2x/wp11062132.jpg",
    "https://wallpapercave.com/dwp2x/wp11062139.jpg",
    "https://wallpapercave.com/dwp2x/wp11062178.jpg",
    "https://wallpapercave.com/dwp2x/wp11062180.jpg",
    "https://wallpapercave.com/dwp2x/wp11062213.jpg"

]
var index = 1;
document.getElementById("forward").onclick = () => {
    if (index > images.length-1) index = 0;
    document.getElementById("slider-image").src = images[index];
    index++;
}
document.getElementById("backward").onclick = () => {
    if (index < 0) index = images.length-1;
    document.getElementById("slider-image").src = images[index];
    index--;
}







