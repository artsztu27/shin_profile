import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Chinese from '../lang/tw';
import English from '../lang/en';

export const Context = React.createContext();

const local = navigator.language;

let lang = 'cn';
if (local === 'en') {
  lang = English;
}else {
  lang = Chinese;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
          setMessages(English);
        } else {
          setMessages(Chinese);
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}
export default Wrapper;