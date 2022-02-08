import { createContext, useState, useEffect } from 'react'

const HeroImageContext = createContext({
    homePageImage: null,
    getHomePageImage: function (homePageImage) { },
})

export function HeroImageContextProvider(props) {
    const [homePageImage, setHomePageImage] = useState()

    // get contact data
    function getHomePageImageHandler(imageData) {
        setHomePageImage(imageData)
    }


    const context = {
        homePageImage: homePageImage,
        getHomePageImage: getHomePageImageHandler,
    }

    return (<HeroImageContext.Provider value={context}>
        {props.children}
    </HeroImageContext.Provider>)
}

export default HeroImageContext