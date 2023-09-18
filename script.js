var csr = document.querySelector("#cursor");
var csrB = document.querySelector("#cursor-b");
// var h4All = document.querySelector("#nav");
var cards = document.querySelectorAll("#last .cards");

cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        card.style.transform = "translate3d(0px, -10px, 10px) rotate(1deg)";
    });
    card.addEventListener("mouseleave", function() {
        card.style.transform = "translate3d(0px, 0px, 0px) rotate(0deg)";
    });
});
document.addEventListener("mousemove",function (params) {
    csr.style.left = params.x-10+"px";
    csr.style.top = params.y-10+"px";
    csrB.style.left = params.x-100+"px";
    csrB.style.top = params.y-100+"px";
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    // height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    // duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#about #kaliR, #about-txt, #about #kalkiR",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 60%",
        end:"top 58%"
    }
})
gsap.from(".quote1",{
    y:-40,
    x:-40,
    scrollTrigger:{
        trigger:".quote1",
        scroller:"body",
        start:"top 50%",
        end:"top 48%",
        scrub:7
    }
})
gsap.from(".quote2",{
    y:40,
    x:40,
    scrollTrigger:{
        trigger:".quote2",
        scroller:"body",
        start:"top 80%",
        end:"top 78%",
        scrub:7
    }
})
gsap.from("#god",{
    opacity:0,
    y:30,
    x:-30,
    duration:1,
    scrollTrigger:{
        trigger:"#god",
        scroller:"body",
        start:"top 90%",
        end:"top 88%",
        scrub:1
    }
})
gsap.from("#kalisena",{
    opacity:0,
    y:30,
    x:30,
    duration:1,
    scrollTrigger:{
        trigger:"#kalisena",
        scroller:"body",
        start:"top 90%",
        end:"top 88%",
        scrub:1
    }
})
gsap.from("#battle",{
    opacity:0,
    y:80,
    // x:80,
    duration:1,
    scrollTrigger:{
        trigger:"#battle",
        scroller:"body",
        start:"top 90%",
        end:"top 88%",
        scrub:1
    }
})