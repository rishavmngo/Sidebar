const collapseBtn = document.querySelector(".collapse-btn");
const navBar = document.querySelector(".nav-container");

collapseBtn.addEventListener("click", actionCollapse);

function actionCollapse() {
  navBar.classList.toggle("collapse");
}
