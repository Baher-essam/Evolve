/*header background offset*/
const parallex = document.getElementById("parallex");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    console.log('offset' + offset);
    parallex.style.backgroundPositionY = offset * 0.6 +"px";
})



/*scrollbar width*/
window.addEventListener("scroll" , event => {
    let scrollTop =document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progressElement = 100 * scrollTop / scrollHeight ;
    document.querySelector("#progress").style.width = progressElement + "%";
})
/*scrollbar height*/
$(function () {
    let progressbar = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressHeight = (window.pageYOffset/totalHeight) *100;
        progressbar.style.height = progressHeight + '%';
    }
})


//showNavbar
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $header = $("header")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    });
  });