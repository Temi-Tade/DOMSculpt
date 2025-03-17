import Sculpt from "../../main.js";

function Controls() {
    let angle = 0;
    var control = Sculpt.create(
        'div',
        {cls: 'slider-wrap'},
        Sculpt.create(
            'input',
            {
                title: "Slide to rotate the image",
                type: 'range',
                min: 0,
                max: 360,
                value: 0,
                oninput: (event) => {
                    document.querySelector("#logo img").style.transform = `rotateZ(${event.target.value}deg)`;
                    control.querySelector("#angle").innerHTML = `${event.target.value}&deg;`;
                }
            }
        ),
        Sculpt.create(
            'p',
            {cls: 'angle', id: 'angle', text: `${angle}`},
        )
    );

    Sculpt.mount(control, 'logo');
}

export default Controls;