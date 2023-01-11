import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h1>G'n'G Indumentaria</h1>
            <div>
                <button>Indumentaria para bebés</button>
                <button>Indumentaria para niños/as</button>
                <button>Indumentaria para adolescentes</button>
            </div>
            <CartWidget />
        </nav>
    );
}
export default NavBar;