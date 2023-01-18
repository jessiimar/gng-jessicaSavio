import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav style={{display: 'flex', justifyContent:'space-around', alignItems:'center'}}>
            <h1>G'n'G Indumentaria</h1>
            <div style={{display: 'flex', justifyContent:'space-around',alignItems:'center'}} >
                <Link to = '/category/bebe'>Ropa para bebés</Link>
                <Link to = '/catrgory/niños'>Ropa para niños/as</Link>
                <Link to = '/category/adolescentes'>Ropa para adolescentes</Link>
            </div>
            <CartWidget />
        </nav>
    );
}
export default NavBar;