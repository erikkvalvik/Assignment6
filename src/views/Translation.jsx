import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translation/TranslationForm"
import { useUser } from "../context/UserContext"
import {submitTranslation} from "../api/translate"
import {STORAGE_KEY_USER} from "../const/storageKeys"
import {storageSave} from "../utils/storage"


const Translation = () => {
    
    const {user, setUser} = useUser()
    
    const handleTranslateClick = async translation => {
        console.log("onTranslate: ",translation)
        const message = translation.translation
        console.log(message)
    
        const [error, updatedUser] = await submitTranslation(user, message)
        if(error !== null){
            return
        }
        //Keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        //Update context state
        setUser(updatedUser)

        console.log('Error', error)
        console.log('Result', updatedUser)
        
    }
    

    return (
        <>
            <h1>Translation</h1>
            <TranslationForm onTranslate={handleTranslateClick} />
        </>
    )
}
export default withAuth(Translation)