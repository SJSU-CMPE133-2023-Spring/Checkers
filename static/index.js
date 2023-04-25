

home = document.getElementById("home");
about = document.getElementById("about");
rules = document.getElementById("rules");
leaderboard = document.getElementById("leaderboard");
// console.log(window.location.href);
if (window.location.href === home.href) {
  // console.log(home.style.color);
  home.classList.add("active");
  // home.style.color = "black";
  about.classList.remove("active");
  rules.classList.remove("active");
  leaderboard.classList.remove("active");
  // console.log("Home page");
} else if (window.location.href === about.href) {
  about.classList.add("active");
  home.classList.remove("active");
  rules.classList.remove("active");
  leaderboard.classList.remove("active");
  // home.style.color = "red";
  // console.log("About page");
} else if (window.location.href === rules.href) {
  rules.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  leaderboard.classList.remove("active");
  // home.style.color = "red";
  // console.log("Rules page");
} else if (window.location.href === leaderboard.href) {
  leaderboard.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  rules.classList.remove("active");
  // home.style.color = "red";
  // console.log("leaderboard page");
}
