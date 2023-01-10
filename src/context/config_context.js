import React from 'react'
import { useState } from 'react'

import es from '../lang/es.json'
import en from '../lang/en.json'
import { useEffect } from 'react'

const configContext = React.createContext()

const ConfigProvider = ({children}) =>{
    const [lang, setLang] = useState("es")
    const [style, setStyle] = useState(["light", "black", "dark", "white"])
    const [user, setUser] = useState(false)
    const [text, setText] = useState(es)

    useEffect(() => {
        switch (lang) {
            case 'es':
                setText(es)
                break;
            case 'en':
                setText(en)
                break;
        
            default:
                setText(es)
                break;
        }
    }, [lang])

    return(
        <configContext.Provider 
            value={{
                lang: {value: lang, set: setLang},
                style: {value: style, set: setStyle},
                user: {value: user, set: setUser},
                text: text
            }}
        >
            {children}
        </configContext.Provider>
    )
}

export {ConfigProvider, configContext}