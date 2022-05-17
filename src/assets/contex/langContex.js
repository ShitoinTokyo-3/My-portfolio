import React, { useState } from 'react';
import English from '../lang/en-US.json';
import Spanish from '../lang/es-ES.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localeDefault;
    let messagesDefault;
    const lang = localStorage.getItem('lang');

    if(lang){
        localeDefault = lang;
        if(lang === 'en-US'){
            messagesDefault = English;
        }else if(lang === 'es-ES'){
            messagesDefault = Spanish;
        }else{
            localeDefault = 'en-US';
            messagesDefault = English;
        }
    }

    const [message, setMessage] = useState(messagesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLanguage = (language) => {
        switch (language) {
            case 'es-ES':
                setMessage(Spanish);
                setLocale('es-ES');
                localStorage.setItem('lang', 'es-ES');
                break;
            case 'en-US':
                setMessage(English);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMessage(English);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }
    return(
        <langContext.Provider value={{setLanguage}}>
            <IntlProvider locale={locale} messages={message}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { langContext, LangProvider };