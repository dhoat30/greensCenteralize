import { createContext, useState, useEffect } from 'react'

const LoadingContext = createContext({
    loadingOverlay: false,
    getLoadingOverlay: function (loadingOverlay) { },
})

export function LoadingContextProvider(props) {
    const [loadingOverlay, setLoadingOverlay] = useState()

    // get contact data
    function getLoadingOverlayHandler(loadingData) {
        setLoadingOverlay(loadingData)
    }


    const context = {
        loadingOverlay: loadingOverlay,
        getLoadingOverlay: getLoadingOverlayHandler,
    }

    return (<LoadingContext.Provider value={context}>
        {props.children}
    </LoadingContext.Provider>)
}

export default LoadingContext