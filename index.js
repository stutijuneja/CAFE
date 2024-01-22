window.addEventListener("load", function () {
  var pageLoader = document.querySelector(".page-loader");
  pageLoader.style.display = "none";
});

window.addEventListener("scroll", () => {
  let menu = document.querySelector('.menu-navigator');
  let content = document.querySelector('.content').offsetTop;

  let scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (content < scrollPos) {
    menu.classList.add("sticky")
  } else {
    menu.classList.remove("sticky");
  }
})