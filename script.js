const collapseBtn = document.querySelector(".collapse-btn");
const navBar = document.querySelector(".nav-container");
collapseBtn.addEventListener("click", actionCollapse);
var data = [];
console.log(navBar.classList);
window.addEventListener("load", function () {
  data = JSON.parse(localStorage.getItem("state"));
  if (data.length === 0) {
    localStorage.setItem("state", JSON.stringify(Array.from(navBar.classList)));
  } else {
    var temp = "";
    data.forEach(function (item) {
      temp = temp + item;
      temp = temp + " ";
    });
    navBar.classList = temp;
  }
});
function actionCollapse() {
  navBar.classList.toggle("collapse");
  localStorage.setItem("state", JSON.stringify(Array.from(navBar.classList)));
}
