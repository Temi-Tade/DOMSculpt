import Sculpt from "../../main.js";


function Goto() {
    var goto = Sculpt.create(
        'div',
        {cls: 'goto', id: 'goto'},
        Sculpt.create(
            'ul',
            {},
            Sculpt.create('li', {}, Sculpt.create('a', {text: 'Visit Website', href: "https://github.com/Temi-Tade/DOMSculpt/blob/main/README.md"})),
            Sculpt.create('li', {}, Sculpt.create('a', {text: 'Read the Docs', href: "https://github.com/Temi-Tade/DOMSculpt/blob/main/README.md"})),
        )
    );

    Sculpt.mount(goto, 'logo');
}

export default Goto;