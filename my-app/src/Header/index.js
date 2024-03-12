import {Link} from "react-router-dom"

import "./index.css"

const Header = () => (
    <nav className="header-nav-elem">
        <Link className="header-link-elem" to="/" >Products</Link>
    </nav>
)

export default Header