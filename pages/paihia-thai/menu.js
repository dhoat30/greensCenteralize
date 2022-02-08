import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import MenuPage from '../../Components/MenuPage/MenuPage'
import SEO from '../../Components/SEO'
import ContactInfoContext from '../../store/contact-info-context'

export default function Menu(props) {
    const contactInfoCtx = useContext(ContactInfoContext)
    useEffect(() => {
        contactInfoCtx.getContactDataUrl('greens-thai-paihia')
    }, [])

    const seo = {
        title: "Menu – Greens Thai Restaurant – Paihia | Delivery | Byo | Gluten Free Options",
        description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Paihia is famed for.",
        imageSrc: props.seoData.acf.social_media_share_image.url
    }

    return (
        < React.Fragment >
            <SEO
                seo={seo}
            />

            <MenuPage menuData={props.menuData} />
        </React.Fragment >
    )
}

export async function getServerSideProps(context) {

    //menu images 
    const menuImages = await fetch(`${process.env.url}/wp-json/wp/v2/menu_images?menu-images-category-slug=thai-paihia`)
    const menuData = await menuImages.json()

    // const homePage = await getPage('home-page')
    const seoResponse = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
    let seoData = await seoResponse.json()
    seoData = await seoData.filter(item => item.title.rendered.includes('Russell'))

    return {
        props: {
            menuData: menuData,
            seoData: seoData[0]

        },
        //revalidate: 60
    }

}


