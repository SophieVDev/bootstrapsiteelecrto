document.addEventListener("scroll", (e) => {
  let btnScrollTop = document.getElementById("scrollTop");
  if (window.scrollY >= 100) {
    btnScrollTop.style.display = "initial";
  } else {
    btnScrollTop.style.display = "none";
  }
});
