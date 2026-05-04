
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
         
        

        if (user && user.password===password) {
            // Store login state
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user_ID", user.user_ID);
            localStorage.setItem("role", user.role);
            

            // Redirect
            let login = (new Date()).toString();
            localStorage.setItem("LastLogin",login);
            

            const popup = document.querySelector(".logindone");
            popup.style.display="block";
            
            setTimeout (function () {
                window.location.href = "home.html"; 
                popup.style.display="none";
                
            },2000);

        } else {
            const popup = document.querySelector(".loginfailed");
            popup.style.display="block";
            setTimeout(function(){
                popup.style.display="none";
            },2000);
        }
    });

});