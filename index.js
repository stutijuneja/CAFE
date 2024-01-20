const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

window.addEventListener("load", function () {
  var pageLoader = document.querySelector(".page-loader");
  pageLoader.style.display = "none";
});


