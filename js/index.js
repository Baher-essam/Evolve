/*header background offset*/
const parallex = document.getElementById("parallex");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    console.log('offset' + offset);
    parallex.style.backgroundPositionY = offset * 0.6 +"px";
})
