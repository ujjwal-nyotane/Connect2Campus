(function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");
  if (isLoggedIn !== "true") {

    window.location.href = "index.html";
  }
  
  if(role === "admin" && !window.location.href.includes("faculty.html")){
    window.location.href = "faculty.html"; 
  }
  if(role === "student" && window.location.href.includes("faculty.html")){
    window.location.href = "home.html";
  }
})();


function logout() {
  localStorage.setItem("isLoggedIn", false);
  window.location.href = "index.html";
}