const Data = {
    Modal_Toggle: "dropdown-toggle",
    Active: null
}

const Toggles = document.getElementsByClassName(Data.Modal_Toggle)


function Click(event) {
    var Dataset = event.target.dataset


    if (Dataset.object) {
        var Dropdown = document.getElementById(Dataset.object)

        if (Dropdown == Data.Active) {
            Dropdown.classList.remove("active")
            Data.Active = null
            return
        }

        if (Data.Active) {
            if (Data.Active.classList.contains("active")) {
                Dropdown.classList.remove("active")
            }
        }

        if (Dropdown) {
            Dropdown.classList.add("active")
            Data.Active = Dropdown
        }
    }
}

export default function() {
    for (let i = 0; i < Toggles.length; i++) {
        Toggles[i].addEventListener("click", Click)
    }
}