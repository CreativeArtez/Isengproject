Splitting();
gsap.registerPlugin(ScrollTrigger);



  //untuk navbar
  const menuBtn = document.querySelector('.nav');
  const bgnav = document.querySelector('.sec-navbar');
  const lineNav = document.querySelectorAll('.line-nav')


  let menuOpen = false ;
  gsap.set(bgnav, {

     display:'none',
     yPercent:-100
  })
  gsap.set(lineNav, {
     backgroundColor:'white'
  })


  const navTl = gsap.timeline({
    defaults:{
      ease:'power4.inOut',
    }
  });
  navTl
  .to(bgnav, {
     duration:1,
     display:'flex',
     yPercent:0
  })
  .to(lineNav, {
     backgroundColor:'black'
  })



  navTl.pause();
  menuBtn.addEventListener('click', () => {
    if (!menuOpen){
      navTl.play();
      menuOpen = true ;
    } else {
      navTl.reverse();
      menuOpen = false;
    }
  })

//mouse custom
document.addEventListener("DOMContentLoaded", function() {
     const cursor = document.querySelector('.custom-cursor');

     document.addEventListener('mousemove', e => {
         gsap.to(cursor, {duration: 0, left: e.clientX - 10, top: e.clientY - 10, opacity: 1});
     });

     document.addEventListener('mouseleave', () => {
         gsap.to(cursor, {duration: 0.2, opacity: 0});
     });
 });

//animasi opening
const op = gsap.timeline();
op.from('.dalam',{
    yPercent:200,
    stagger:0.1

})


//for animation all
let mm = gsap.matchMedia();


mm.revert();

     //for sec-one
gsap.to('.-a', {
     scrollTrigger:{
          trigger:'.sec-one',
          start:'center 30%',
          end:'120% center',
          scrub:1,
     },
     marginLeft: '30%'
   })
   gsap.to('.-b', {
     scrollTrigger:{
          trigger:'.sec-one',
          start:'center 30%',
          end:'120% center',
          scrub:1,
     },
     marginLeft: '-30%'
   })
   gsap.to('.-c', {
     scrollTrigger:{
          trigger:'.sec-one',
          start:'center 30%',
          end:'120% center',
          scrub:1,
     },
     marginLeft: '40%'
   })

//for sec-two
gsap.to('.video-cover', {
     scrollTrigger:{
          trigger:'.sec-two',
          start:'top 80%',
          end:'center center',
          scrub:1,
     },
     width:'90%',
     height: '90%'
   })


//for sec-three
gsap.from('.jj .char',2,{
     scrollTrigger:{
          trigger:'.sec-three',
          start:'top center',
          end:'10% center',
          scrub:2,
     },
     opacity:0,
     y:10,
     stagger:0.1
})
gsap.from('.text-2 p',2,{
     scrollTrigger:{
          trigger:'.sec-three',
          start:'top center',
          end:'20% center',
          scrub:1,
     },
     opacity:0,
     y:100,
     stagger:0.5
})
gsap.from('.sec-three .-atas',1, {
     scrollTrigger:{
          trigger:'.sec-three',
          start:'10% bottom',
          end:'20% 90%',
          scrub:false,
     },
     scaleX:0,
     transformOrigin:'left',
     opacity:0
    
   })
   gsap.from('.sec-three .-tengah',1, {
     scrollTrigger:{
          trigger:'.sec-three',
          start:'15% bottom',
          end:'20% 90%',
          scrub:false,
          
     },
     scaleY:0,
     transformOrigin:'top',
     opacity:0
    
   })


//for sec-four
gsap.to('.sec-four img',1, {
     scrollTrigger:{
          trigger:'.sec-four',
          start:'top 90%',
          end:'bottom center',
          scrub:1,
     },
     yPercent:30
    
   })

//for sec-five
gsap.from('.desc-kecil',1, {
     scrollTrigger:{
          trigger:'.sec-five',
          start:'40% 70%',
          end:'120% bottom',
          scrub:2,

     },
     yPercent:60
    
   })

//for sec-six
gsap.to('.img-six',1, {
     scrollTrigger:{
          trigger:'.sec-six',
          start:'top 70%',
          end:'bottom center',
          scrub:2,

     },
     yPercent:15
    
   })









//for sec seven
const containers = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");


let scrollTweens = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: "+=8000",
  }
});

gsap.from('.cover-six-gsap', {
     scrollTrigger:{
          trigger:'.sec-seven',
          start:'top center',
          end:'center center',
          scrub:1,
     },
     y:'100vh',
     stagger:0.5
})
