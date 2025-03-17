import Sculpt from "../../main.js";


function Goto() {
    var goto = Sculpt.create(
        'div',
        {cls: 'goto', id: 'goto'},
        Sculpt.create(
            'ul',
            {},
            Sculpt.create('li', {}, Sculpt.create('a', {text: 'Visit Website', href: "https://example.com"})),
            Sculpt.create('li', {}, Sculpt.create('a', {text: 'Read the Docs', href: "https://example.com"})),
        )
    );

    Sculpt.mount(goto, 'logo');
}

export default Goto;