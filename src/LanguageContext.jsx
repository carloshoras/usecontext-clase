import { createContext, useContext, useState } from "react";

// Creamos un objeto Contexto
const LanguageContext = createContext()

// Proveedor de contexto
export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

//Consumo del Contexto
export const useLanguage = () => useContext(LanguageContext)
