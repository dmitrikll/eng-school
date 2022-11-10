$(document).ready(function(){
    
function showMore() {
    var dots = document.querySelectorAll(".articleDots");
    var moreText = document.querySelectorAll(".articleReadMore");
    var btnText = document.querySelectorAll(".btnReadMore");


    if (dots[0].style.display === "none") {
        dots.forEach(function(el){ el.style.display = "inline";})
        btnText.forEach(function(el){ el.innerHTML = "Read more";})
        moreText.forEach(function(el){ el.style.display = "none";})
    }
    
    else {
        dots.forEach(function(el){ el.style.display = "none";})
        btnText.forEach(function(el){ el.innerHTML = "Hide text";})
        moreText.forEach(function(el){ el.style.display = "inline";})
    }
}

let readmore = document.querySelectorAll('.article__text--button');

readmore.forEach(function(el){ el.addEventListener("click", showMore)})
})



