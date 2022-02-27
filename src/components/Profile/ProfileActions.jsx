import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const ProfileActions = ({ logout }) => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            // Send an event to the parent (Profile view)
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
            
        }
    }

    return(
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}

export default ProfileActions