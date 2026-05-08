function popup(message,messageclass=undefined,location=undefined){
    const popup= document.createElement("div");
    popup.classList.add("overlay")
    popup.innerHTML=`<div class="popup"><p class=${messageclass? messageclass:''}>${message}</p></div>`;
    document.body.appendChild(popup);
    setTimeout(()=>{
        document.body.removeChild(popup);
        if(location){
            window.location.href=location;
        }
    },2000);

    
}

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


        if(user){
        if (user && user.password === password) {

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user_ID", user.user_ID);
            localStorage.setItem("role", user.role);



            let login = (new Date()).toString();
            localStorage.setItem("LastLogin", login);
            popup("Login SuccesFull",'success',"home.html");

            

            

        } else {
            popup("Invalid Password","fail")
        }
    }
    else{
        popup("Invalid Enrollment Number","fail")
    }
    });

});