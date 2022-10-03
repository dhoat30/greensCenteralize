import { createContext, useState, useEffect } from 'react'

const LoadingContext = createContext({
    loadingOverlay: false,
    getLoadingOverlay: function (loadingOverlay) { },
    overlay: false, 
    getOverlay: function (overLay){}, 
})

export function LoadingContextProvider(props) {
    const [loadingOverlay, setLoadingOverlay] = useState()
    const [overlay, setOverlay] = useState() 
    // get contact data
    function getLoadingOverlayHandler(loadingData) {
        setLoadingOverlay(loadingData)
    }
  // get overlay
  function getOverlayHandler(data) {
    setOverlay(data)
}

    const context = {
        loadingOverlay: loadingOverlay,
        getLoadingOverlay: getLoadingOverlayHandler,
        overlay: overlay, 
        getOverlay: getOverlayHandler
    }

    return (<LoadingContext.Provider value={context}>
        {props.children}
    </LoadingContext.Provider>)
}

export default LoadingContext