(function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    // not logged in → force back to login page
    window.location.href = "index.html";
  }
  
})();
// js/logout.js OR add in guard.js

function logout() {
  localStorage.setItem("isLoggedIn", false);
  window.location.href = "index.html";
}