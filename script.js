let crsr = document.querySelector("#cursor")
let bluri = document.querySelector("#cursor-blur")
bluri.style. backgroundColor = "#ffc52480";
crsr.style. background = " linear-gradient(to left bottom,#FFC324, #FFC324)"; 
document.body.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x + "px" ;
    crsr.style.top = dets.y + "px" ;
    bluri.style.left = dets.x -230+ "px" ;
    bluri.style.top = dets.y -230+ "px" ;
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3 ;
        crsr.style.border = "0.5px solid #fff";
        elem.style.color = "#FFD566";
        elem.style.scale = "1.3";
        elem.style.fontWeight = 700 ;
        elem.style.transition = "all ease 0.8s";
        crsr.style.transition = "all ease 0.8s";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1 ;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#FBAF00" ;
        elem.style.color = "#fff";
        elem.style.scale = "1";
        elem.style.fontWeight = 300 ;
        crsr.style.transition = "all ease 0s";
    })
})

gsap.to("#nav",{
    backgroundColor : "#000" ,
    height : "100px" ,
    duration : 1 ,
    scrollTrigger:{
        trigger : "#nav" ,
        scroller : "body" ,
        // markers : true ,
        start : "top -10%",
        end : "top -11%",
        scrub : 1,
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger : "#main" ,
        scroller : "body" ,
        // markers : true ,
        start : " top -30%",
        end : "top -80%",
        scrub : 2,
    }
})

gsap.from("#about-us img , #about-us-in",{
    y : 50 ,
    opacity : 0 ,
    duration : 1.5 ,
    stagger : 0.4 ,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from(".card",{
    scale:0.8 ,
    opacity : 0,
    duration : 0.5 ,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true ,
        start:"top 70%",
        end:"top 55%",
    }
})

gsap.from("#colon1",{
    y : -70 ,
    x : -70 ,
    duration : 1 ,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2,
    }
})

gsap.from("#colon2",{
    y : 70 ,
    x : 70 ,
    duration : 1 ,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true ,
        start:"top 90%",
        end:"top 95%",
        scrub:4,
    }
})

gsap.from("#page4 h1",{
    y : 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 90%",
        scrub:3,
    }
})
gsap.to(".f h3,#f1 img",{
    opacity : 1,
    y : -20,
    color :"#fff",
    duration : 1.4 ,
    stagger :0.3,
    scrollTrigger:{
        trigger:".f h3,#f1 img",
        scroller:"body",
        start:"top 78%",
        end:"top 91%",
        scrub:4,
    }
})
gsap.from("#nav h4,#nav img",{
    y : -30 ,
    duration : 1.2,
    opacity : 0,
    stagger : 0.2,
})
gsap.from("#page1 h1",{
    y : -20 ,
    opacity : 0 ,
    duration : 2 ,
    delay : 0.6 ,
})
gsap.from("#page1 h2",{
    x: -10 ,
    opacity : 0 ,
    duration : 2 ,
    delay : 0.6 ,
})
gsap.from("#page1 p",{
    x: 10,
    opacity : 0 ,
    duration : 2 ,
    delay : 0.6 ,
})



  