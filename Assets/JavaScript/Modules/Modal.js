const Data = {
    Modal_Toggle: "modal-toggle",
    Modal_Submit: "modal-submit",
    Active: null
}

const Submits = document.getElementsByClassName(Data.Modal_Submit)
const Buttons = document.getElementsByClassName(Data.Modal_Toggle)

function Click(event) {
    var Dataset = event.target.dataset

    var Modal = document.getElementById(Dataset.modal)

    if (Modal && Data.Active == null) {
        Modal.classList.add("active")
        Data.Active = Modal
    }
}

export default function() {
    document.body.addEventListener("click", function(event) {
        if (!Data.Active) {
            return
        }

        if (event.target.classList.contains("active") && event.target.classList.contains("modal-bg")) {
            Data.Active.classList.remove("active")
            Data.Active = null
        }
    })

    for (let i = 0; i < Buttons.length; i++) {
        Buttons[i].addEventListener("click", Click)
    }

    for (let i = 0; i < Submits.length; i++) {
        Submits[i].addEventListener("click", function() {
            Data.Active.classList.remove("active")
            Data.Active = null  
        })
    }
}