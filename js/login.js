
document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.querySelector("form");
    if (localStorage.getItem("isLoggedIn") == "true"){
    window.location.href="home.html";
    }
    if(localStorage.length === 0){
            
            
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("departments",JSON.stringify(departments));
            localStorage.setItem("results",JSON.stringify(results));
            localStorage.setItem("attendance", JSON.stringify(attendance));
            localStorage.setItem("hostels", JSON.stringify(hostels));
        }
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        
        // Get values
        const enrollment = document.getElementById("enroll").value.trim();
        const password = document.getElementById("pass").value.trim();

        // Find user
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users[enrollment];
        console.log(user);
        

        if (user.password===password) {
            // Store login state
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user_ID", user.user_ID);
            localStorage.setItem("role", user.role);
            

            // Redirect
            let login = (new Date()).toString();
            localStorage.setItem("LastLogin",login);
                  
            window.location.href = "home.html";
        } else {
            alert("Invalid enrollment number or password.");
        }
    });

});