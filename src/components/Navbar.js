export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__title">
                <h1 >E Z N O X</h1>
            </div>

            <nav className="header__container">
                <ul className="navbar">
                    <li className="navbar__link">INICIO</li>
                    <li className="navbar__link">BIBLIOTECA</li>
                    <li className="navbar__link">DIRECTORIO</li>
                    <li className="navbar__link">CUENTA</li>
                    <li className="navbar__link">AYUDA</li>
                </ul>
            </nav>
        </header>
    )
}