import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { clearHistoryTranslation } from "../../api/translate"
import ProfileTranslationHistory from "./ProfileTranslationHistory"

const ProfileActions = ({ logout }) => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            // Send an event to the parent (Profile view)
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
            
        }
    }


    const handleCLearHistoryClick = async () => {
        if(!window.confirm('Are you sure?\nThis is irreversible!')){
            return
        }
        const [clearError ] = await clearHistoryTranslation(user.id)

        if(clearError !== null){
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return(
        <ul className="profile-actions">
            <li><Link to="/translation">Translations</Link></li>
            <li><button onClick={ handleCLearHistoryClick }>Clear history</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
            
        </ul>
    )
}

export default ProfileActions