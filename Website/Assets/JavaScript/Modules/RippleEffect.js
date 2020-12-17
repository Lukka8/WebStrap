/*

    Created: December 8, 2020
    By: @Luka
    Modified: December 9, 2020

    Class: RippleEffect

*/

function Click(Event) {
    let X = Event.clientX - Event.target.offsetLeft;
    let Y = Event.clientY - Event.target.offsetTop;
    let Ripple = document.createElement('span');
    Ripple.style.left = X +  'px';
    Ripple.style.top = Y + 'px';
    this.appendChild(Ripple);

    setTimeout(function()
    {
        Ripple.remove();
    }, 2000)
}

export default function()
{
    const a = document.querySelectorAll('a');
    const b = document.querySelectorAll('button');

    b.forEach(function (button)
    {
        if (button.classList.contains("ripple")) {
            button.addEventListener('click', Click);
        }
    });

    a.forEach(function (button)
    {
        if (button.classList.contains("ripple")) {
            button.addEventListener('click', Click);
        }
    });
}