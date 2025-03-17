import Sculpt from "../../main.js";

function Header(){
    const header = Sculpt.create(
        'header',
        {},
        Sculpt.create('h1', {text: "Test App"})
    )
    
    Sculpt.mount(header);
}

export default Header;