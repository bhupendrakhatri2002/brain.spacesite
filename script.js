
function locomotivecode(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
    
    document.addEventListener("mousemove",function(e){
        gsap.to(".curser",{
            top:e.y,
            left:e.x,
            duration:.2
        })
    })
    
}
locomotivecode()

// outmain---------------------------------------


// --------------------------page1--------------------
function page1animation(){
    gsap.to(".page1  video",{
        filter:"blur(20px)",
        transform:"scalex(0.85)",
        // duration:1,
        scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -50%",
        scrub:"true"
       }
    })
    
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            top: dets.y,
            left: dets.x,
            duration: 1
        })
    })
    gsap.to(".navright",{
        y:-100,
        duration:1,
        // display:"none",
        // opacity:0,
        scrollTrigger:{
            trigger:".nav",
            scroller:".main",
            // markers:true,
            start:"top 0%",
            end:"top -10%",
            scrub:true
    
       }
    })
    gsap.to(".nav i",{
        display:"inline",
        // duration:1,
        scrollTrigger:{
            trigger:".nav",
            scroller:".main",
            start:"top -15%",
            end:"top -20%",
            scrub:true
        }
    })
}

page1animation()


var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.1
})

// -------------------------page2---------------------
function page2animation(){
    gsap.to(".page2left img",{
        x:1000, 
        duration:9,
        // delay:1,
        repeat:-1,
        ease:"none",
        scrub:true,
    })

    var tl2 =gsap.timeline({
        duration:1,
       
        scrollTrigger:{
            scroller:".main",
            trigger:".page2",
            // markers:true,
            start:"top 60%",
            end:"top 20%",
            scrub:1
        }
    })

    tl2.from(".page2cont .page2left",{
        y:800,
        opacity:0
        
    })
    tl2.from(".page2cont .page2right h2",{
        y:800,
        opacity:0,
    })
    tl2.from(".page2cont .page2right p",{
        y:800,
        opacity:0,
    })
    tl2.from(".page2cont .page2right button",{
        y:800,
        opacity:0,
    })
   
    document.querySelector(".page2left").addEventListener("mouseenter",function(){
        gsap.to(".page2left",{
            transform:"scale(1.1)",
            // duration:1,
            scrollTrigger:{
            trigger:".page2left",
            scroller:"body",
         }
        }
    )
    })
    document.querySelector(".page2left").addEventListener("mouseleave",function(){
        gsap.to(".page2left",{
            transform:"scale(1)",
            // duration:1,
            scrollTrigger:{
            trigger:".page2left",
            scroller:".main",
         }
        }
    )
    })
}
page2animation()

// ------------------------page3--------------------------
function page3animation(){

    var tl3 =gsap.timeline({
        duration:1,
       
        scrollTrigger:{
            scroller:".main",
            trigger:".page3",
            // markers:true,
            start:"top 60%",
            end:"top 20%",
            scrub:1
        }
    })

    tl3.from(".left3 h1",{
        y:800,
        opacity:0
        
    },"ani")
    tl3.from(".left3 p",{
        y:800,
        opacity:0,
    })
    tl3.from(".left3 button",{
        y:800,
        opacity:0,
    })
    tl3.from(".right3 ",{
        y:800,
        opacity:0,
    },"ani")
    document.querySelector(".right3").addEventListener("mouseenter",function(){
        gsap.to(".right3",{
            transform:"scale(1.1)",
            // duration:1,
            scrollTrigger:{
            trigger:".right3",
            scroller:".main",
         }
        }
    )
    })
    document.querySelector(".right3").addEventListener("mouseleave",function(){
        gsap.to(".right3",{
            transform:"scale(1)",
            // duration:1,
            scrollTrigger:{
            trigger:".right3",
            scroller:".main",
         }
        }
    )
    })
}

page3animation()


// ---------------------------------page4-------------------------

// page4cont1---------------------------------------------
function page4cont1animation(){
    var tl41 =gsap.timeline({
        duration:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page4cont1",
            start:"top 60%",
            end:"top 50%",
            scrub:2
        }
    })
    tl41.from(".page4cont1 h1",{
        y:300,
        opacity:0
    })
    tl41.from(".page4cont1 p",{
        y:300,
        opacity:0
    })
    tl41.from(".page4cont1 button",{
        y:300,
        opacity:0
    })
}
page4cont1animation()


// page4con2---------------------------------------------------
function page4cont2animation(){
    var tl42 =gsap.timeline({
        duration:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page4cont2",
            start:"top 60%",
            end:"top 50%",
            scrub:2
        } 
    })
    tl42.from(".page4cont2  .left42 h3",{
        y:300,
        opacity:0
    })
    tl42.from(".page4cont2  .right42 video",{
        y:300,
        opacity:0
    })
    
    document.querySelector(".right42").addEventListener("mouseenter",function(){
        gsap.to(".right42",{
            transform:"scale(1.2)",
            // duration:1,
            scrollTrigger:{
            trigger:".right42",
            scroller:"body",
         }
        }
    )
    })
    document.querySelector(".right42").addEventListener("mouseleave",function(){
        gsap.to(".right42",{
            transform:"scale(1)",
            // duration:1,
            scrollTrigger:{
            trigger:".right42",
            scroller:".main",
         }
        }
    )
    })
}
page4cont2animation()


// page4cont3--------------------------------------------------------
function page4cont3animation(){
    var tl43 =gsap.timeline({
        duration:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page4cont3",
            start:"top 60%",
            end:"top 50%",
            scrub:2
        } 
    })
    tl43.from(".page4cont3  .left43 video",{
        y:300,
        opacity:0
    })
    
    document.querySelector(".left43").addEventListener("mouseenter",function(){
        gsap.to(".left43",{
            transform:"scale(1.2)",
            // duration:1,
            scrollTrigger:{
            trigger:".left43",
            scroller:"body",
         }
        }
    )
    })
    document.querySelector(".left43").addEventListener("mouseleave",function(){
        gsap.to(".left43",{
            transform:"scale(1)",
            // duration:1,
            scrollTrigger:{
            trigger:".left43",
            scroller:".main",
         }
        }
    )
    })
    
    tl43.from(".page4cont3 .right43 h3",{
        y:300,
        opacity:0
    })
    tl43.from(".page4cont3 .right43 button",{
        y:300,
        opacity:0
    })
    
}
page4cont3animation()


// page4cont4--------------------------------------------------------
function page4cont4animation(){
    var tl44 =gsap.timeline({
        duration:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page4cont4",
            start:"top 60%",
            end:"top 50%",
            scrub:2
        } 
    })
    tl44.from(".page4cont4  .left44 h3",{
        y:300,
        opacity:0
    })
    tl44.from(".page4cont4  .right44 video",{
        y:300,
        opacity:0
    })
    
    document.querySelector(".right44").addEventListener("mouseenter",function(){
        gsap.to(".right44",{
            transform:"scale(1.2)",
            // duration:1,
            scrollTrigger:{
            trigger:".right44",
            scroller:"body",
         }
        }
    )
    })
    document.querySelector(".right44").addEventListener("mouseleave",function(){
        gsap.to(".right44",{
            transform:"scale(1)",
            // duration:1,
            scrollTrigger:{
            trigger:".right44",
            scroller:".main",
         }
        }
    )
    })
}
page4cont4animation()


// page4cont5------------------------------------------------------------
function page4cont5animation(){
    var tl45 =gsap.timeline({
        duration:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page4cont5",
            start:"top 60%",
            end:"top 50%",
            scrub:2
        } 
    })
    tl45.from(".page4cont5  .left45 video",{
        y:300,
        opacity:0
    })
    tl45.from(".page4cont5 .right45 h3",{
        y:300,
        opacity:0
    })
    tl45.from(".page4cont5 .right45 button",{
        y:300,
        opacity:0
    })
    
    document.querySelector(".left45").addEventListener("mouseenter",function(){
        gsap.to(".left45",{
            transform:"scale(1.2)",
            // duration:1,
            scrollTrigger:{
            trigger:".left45",
            scroller:"body",
         }
        }
    )
    })
    document.querySelector(".left45").addEventListener("mouseleave",function(){
        gsap.to(".left45",{
            transform:"scale(1)",
            // duration:1,
            scrollTrigger:{
            trigger:".left45",
            scroller:".main",
         }
        }
    )
    })
}  
page4cont5animation()




// page5 animation------------------------------------------------------


function page5animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 0",
            end: "top -70%",
            scrub: 3,
            pin: true
        }
    })
    
    tl4.to(".page5cont", {
        transform: "translateX(-50%)",
    }, "okay")
    tl4.to(".page5 .slider .move", {
        x: 650,
    }, "okay")
    
    
    // document.querySelector(".page5").addEventListener("mousemove", function (dets) {
    //     document.querySelector(".page5").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
    // })
}
page5animation()
function setupPage5Animation() {
    // Clean up any existing ScrollTriggers specific to page 5
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === document.querySelector(".page5")) {
        trigger.kill();
      }
    });
  
    if (window.matchMedia("(min-width: 480px)").matches) {
      // Initialize ScrollTrigger animations for larger screens
      var tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page5",
          scroller: ".main",
          start: "top 0",
          end: "top -70%",
          scrub: 3,
          pin: true
        }
      });
  
      tl4.to(".page5cont", {
        transform: "translateX(-50%)",
      }, "okay");
      tl4.to(".page5 .slider .move", {
        x: 650,
      }, "okay");
    }
  }
  
  // Initial setup
  setupPage5Animation();
  
  // Handle resize event
  window.addEventListener("resize", () => {
    setupPage5Animation();
  });
  


// .page6--------------------------------------------------------