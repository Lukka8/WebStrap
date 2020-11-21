export default function() {

    var Toggle = document.getElementById("navbar-toggle")

    if (Toggle) {
        Toggle.addEventListener("click", function() {
            var navbar = document.getElementById("navbar")
    
            if (navbar && navbar.classList.contains("active")) {
                navbar.classList.remove("active")
            } else {
                navbar.classList.add("active")
            }
        })
    }
}