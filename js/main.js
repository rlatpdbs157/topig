// 맨 위로 가는 스크롤 버튼
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}))
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// 일정 부분 이상 스크롤이 넘어가면 list 항목들이 보이게 됨
const spyEls = document.querySelectorAll('div.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 8,
    slidesPerView: 4.5,
    centeredSlides: 4.5,
    roundLengths: true,
    loop: true,
    loopAdditionalSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
