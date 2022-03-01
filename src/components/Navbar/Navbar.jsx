import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {
    const { user } = useUser()

    return ( 
        <nav className="navbar">
            <ul>
                <li>Translations</li>
            </ul>
            { user !== null && 
            <ul className="navigation">
                <li className="navlinkbutton">
                    <NavLink className="navlink" to="/translation">Translations</NavLink>
                </li>
                <li className="navlinkbutton">
                    <NavLink className="navlink" to="/profile">Profile</NavLink>
                </li>
            </ul>   
            }
        </nav>
    )
}

export default Navbar