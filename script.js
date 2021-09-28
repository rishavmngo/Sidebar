const collapseBtn = document.querySelector(".collapse-btn");
const navBar = document.querySelector(".nav-container");
collapseBtn.addEventListener("click", actionCollapse);
var state = "navCollapse";
if (localStorage.getItem(state) === "true") {
  navBar.classList.add("collapse");
}
function actionCollapse() {
  navBar.classList.toggle("collapse");
  console.log(navBar.classList);
  localStorage.setItem(state, navBar.classList.contains("collapse"));
}
