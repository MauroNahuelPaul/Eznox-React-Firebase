import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__title">
                <h1 >E Z N O X</h1>
            </div>

            <nav className="header__container">
                <ul className="navbar">
                    <li className="navbar__link"><Link to="./">INICIO</Link></li>
                    <li className="navbar__link"><Link to="./explorar">EXPLORAR</Link></li>
                    <li className="navbar__link"><Link to="./biblioteca">BIBLIOTECA</Link></li>
                    <li className="navbar__link"><Link to="./cuenta">CUENTA</Link></li>
                    <li className="navbar__link"><Link to="./ayuda">AYUDA</Link></li>
                </ul>
            </nav>
        </header >
    )
}