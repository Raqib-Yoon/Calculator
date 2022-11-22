import { useEffect, useState } from 'react';
import profile from './My photos/raqib.png'
import open from './Humberger menu/open.svg'
import close from './Humberger menu/close.svg'

import light from './images/light.png'
import dark from './images/dark.png'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [darkModeBtn, setDarkModeBtn] = useState(false)
    const [darkTheme, setDarkTheme] = useState("light_theme")

    const DarkThemeToggle = () => {
        if (darkTheme === "light_theme") {
            setDarkTheme("dark_theme")
        } else {
            setDarkTheme("light_theme")
        }
        setDarkModeBtn(!darkModeBtn)
    }

    useEffect(() => {
        document.body.className = darkTheme;
    })

    return (
        <>

            <header className="header">
                <img src={profile} alt="profile image" />
                <nav className={show ? "navbar" : "navbar hide"}>
                    <ul className="navbar_list">
                        <li className="navbar_link"><a href="#home">Home</a></li>
                        <li className="navbar_link"><a href="#about">About</a></li>
                        <li className="navbar_link"><a href="#skills">Skills</a></li>
                        <li className="navbar_link"><a href="#services">Services</a></li>
                        <li className="navbar_link"><a href="#contact">Contact</a></li>
                        <li id={darkModeBtn ? "light_theme" : "dark_theme"}
                            title={darkModeBtn ? "Apply Light Mode" : "Apply Dark Mode"}>
                            <img src={darkModeBtn ? light : dark}
                                alt="Ligt_Dark"
                                onClick={() => DarkThemeToggle()}
                            />
                        </li>
                    </ul>
                </nav>
                <figure onClick={() => setShow(!show)}>
                    <img src={show ? close : open} alt="Humberger" />
                </figure>
            </header>

        </>
    )
}

export default Navbar;