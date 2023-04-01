import { Link } from "react-router-dom";
import { BsTwitter,BsFacebook,BsInstagram } from 'react-icons/bs';

export const Footer = () => {
    return (
        <footer className="footer">
            <ul className="">
                <li className="">
                    <Link className="" to="https://www.w3schools.com/about/about_copyright.asp">Copyright 2022-2022 by Refsnes
                        Data.</Link>
                    <Link className="" to="https://twitter.com"><BsTwitter /></Link>
                </li>
                <li className="">
                    <Link className="" to="https://www.w3schools.com/about/about_copyright.asp">Todos los derechos reservados</Link>
                    <Link className="" to="https://www.facebook.com/"><BsFacebook /></Link>
            </li>
            <li className="">
                <Link className="" to="https://github.com/MauroNahuelPaul">Mauro Nahuel Paul</Link>
                <Link className="" to="https://www.instagram.com/"><BsInstagram/></Link>
            </li>
        </ul>
        </footer >
    )
}