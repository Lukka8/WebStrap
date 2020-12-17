/*

    Created: December 9, 2020
    By: @Luka
    Modified: December 11, 2020

    Class: Navbar

*/

export default function()   
{
    var Close_Button = document.querySelectorAll(".navbar-close")


    Close_Button.forEach(Button => 
    {
        Button.addEventListener("click", function(Event) 
        {
            var Modal = Event.path[4]

            if (Modal.classList.contains("active"))
            {
                Modal.classList.add("hide")
                Modal.classList.remove("active")

                setTimeout(() => {
                    Modal.classList.remove("hide")
                }, 500);
            }
        });
    });
}