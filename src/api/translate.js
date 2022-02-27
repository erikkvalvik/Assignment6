import { createHeaders } from ".";


const apiUrl = process.env.REACT_APP_API_URL

export const submitTranslation = async (user, message) =>{
    try{
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, message]
            })
        })

        if(!response.ok){
            throw new Error('Could not update the translation')
        }

        const result = await response.json()
        return [ null, result ]
    }
    catch(error){
        return [error.message, null]
    }
}

export const clearHistoryTranslation = async (userId) => {

    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body:JSON.stringify({
                translations: []
            })
        })
        if(!response.ok){
            throw new Error('Could not update translations')
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}