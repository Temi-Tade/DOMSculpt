import Sculpt from "../../main.js";

function Info() {
    var logo = Sculpt.create(
        'div',
        {cls: 'logo', id: 'logo'},
        Sculpt.create('h2', {text: "DOMSculpt"}),
        Sculpt.create('img', {src: './public/DOMSculpt.png', alt: 'DOMSculpt', width: 250, loading: 'lazy'}),
    );

    Sculpt.mount(logo)
}

export default Info;