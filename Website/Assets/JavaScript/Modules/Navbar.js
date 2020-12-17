/*

    Created: December 8, 2020
    By: @Luka
    Modified: None

    Class: Navbar

*/

export default function()   
{
    var Toggle = document.getElementById("navbar-toggle")

    if (Toggle) 
    {
        Toggle.addEventListener("click", function() 
        {
            var navbar = document.getElementById("navbar")

            if (navbar && navbar.classList.contains("hide"))
            {
                navbar.classList.remove("hide")
            }

            if (navbar && navbar.classList.contains("toggle")) 
            {
                navbar.classList.add("hide")
                navbar.classList.remove("toggle")

                setTimeout(() => 
                {
                    navbar.classList.remove("hide") 
                }, 500);
            } else 
            {
                navbar.classList.add("toggle")
            }
        })
    }
}