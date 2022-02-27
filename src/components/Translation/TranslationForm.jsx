import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { storageRead, storageSave } from "../../utils/storage"

const translationConfig = {
    required: true
}
let messageArray = []

const TranslationForm = ( { onTranslate} ) => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    // Event handlers
    const onSubmit =  message => {
        console.log("message: ", message)
        storageSave('translation-message', message)
        messageArray = message.translation.split('')
        // messageArray.shift()
        // messageArray.pop()
        console.log("messageArray: ",messageArray)
        onTranslate(message)
    }
    
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <input 
                    type="text"
                    placeholder="type something.."
                    { ...register("translation", translationConfig)}

                    />
            </fieldset>

            <button type="submit">Translate</button>
            <div className="hand-sign-container">
                <p>{messageArray}</p>
                
                <ul className="hand-sign-list">
                    {messageArray.map(function(name, index){
                        return <li key={index}><img className="hand-sign-img" src={"Assets/individial_signs/" + name + ".png"} alt="" /></li>
                    })}
                </ul>
            </div>
        </form>
        </>
    )

}

export default TranslationForm