import { createContext, useState, useEffect } from 'react'

const ContactInfoContext = createContext({
    contactData: null,
    getContactData: function (contactData) { },
    contactDataUrl: null,
    getContactDataUrl: function (contactDataUrl) { },
    showHeaderFooter: null,
    getShowHeaderFooter: function (showHeaderFooter) { }
})

export function ContactInfoContextProvider(props) {
    const [contactData, setContactData] = useState()
    const [contactDataUrl, setContactDataUrl] = useState()
    const [showHeaderFooter, setShowHeaderFooter] = useState(true)
    // get contact data
    function getContactDataHandler(contactData) {
        setContactData(contactData)
    }
    // get contact Data url 
    function getContactDataURLHandler(contactDataUrl) {
        setContactDataUrl(contactDataUrl)
    }
    // get show header footer
    function getShowHeaderFooterHandler(showHeaderFooter) {
        setShowHeaderFooter(showHeaderFooter)
    }
    const context = {
        contactData: contactData,
        getContactData: getContactDataHandler,
        contactDataUrl: contactDataUrl,
        getContactDataUrl: getContactDataURLHandler,
        showHeaderFooter: showHeaderFooter,
        getShowHeaderFooter: getShowHeaderFooterHandler
    }


    return (<ContactInfoContext.Provider value={context}>
        {props.children}
    </ContactInfoContext.Provider>)
}

export default ContactInfoContext