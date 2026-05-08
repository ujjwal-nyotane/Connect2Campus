document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    if (localStorage.getItem("isLoggedIn") == "true") {
        if (localStorage.getItem("role") === "admin") {
            window.location.href = "faculty.html";
        }
        if (localStorage.getItem("role") === "student") {
            window.location.href = "home.html";
        }
    }
    if (localStorage.length === 0) {


        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("departments", JSON.stringify(departments));
        localStorage.setItem("results", JSON.stringify(results));
        localStorage.setItem("attendance", JSON.stringify(attendance));
        localStorage.setItem("hostels", JSON.stringify(hostels));
    }
    form.addEventListener("submit", function(e) {
        e.preventDefault();


        const enrollment = document.getElementById("enroll").value.trim();
        const password = document.getElementById("pass").value.trim();


        const users = JSON.parse(localStorage.getItem("users"));
        const user = users[enrollment];



        if (user && user.password === password) {

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user_ID", user.user_ID);
            localStorage.setItem("role", user.role);



            let login = (new Date()).toString();
            localStorage.setItem("LastLogin", login);


            const popup = document.querySelector(".logindone");
            popup.style.display = "block";

            setTimeout(function() {
                if (user.role === "admin") {
                    window.location.href = "faculty.html";
                }
                if (user.role === "student") {
                    window.location.href = "home.html";
                }
                popup.style.display = "none";

            }, 2000);

        } else {
            const popup = document.querySelector(".loginfailed");
            popup.style.display = "block";
            setTimeout(function() {
                popup.style.display = "none";
            }, 2000);
        }
    });

});