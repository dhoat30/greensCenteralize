import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SloganSection from './SloganSection/SloganSection'
import MenuSection from './MenuSection/MenuSection'
import USP from './USP/USP'
import SecondBanner from './SecondBanner/SecondBanner'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import ChefSection from './ChefSection/ChefSection'
import ExtraInfo from './ExtraInfo/ExtraInfo'
import FormSection from './FormSection/FormSection'
import HomeGallery from './HomeGallery/HomeGallery'

function Home({ sliderData, sloganData, favouriteMenuData, menuImagesData, uspData, bannerData, testimonialData, chefData, galleryData, contactInfoData }) {
    console.log(contactInfoData)
    return (
        <div>
            <HeroSection sliderData={sliderData} />
            <SloganSection title={sloganData.title.rendered} />
            <MenuSection favouriteMenuData={favouriteMenuData}
                menuImagesData={menuImagesData}
            />
            <USP uspData={uspData} />
            <SecondBanner bannerData={bannerData} />
            <TestimonialSection testimonialData={testimonialData} />
            <ChefSection chefData={chefData} />
            <ExtraInfo />
            <FormSection
                iframe={contactInfoData.acf.resdiary_iframe}
                formName={contactInfoData.acf.booking_form_name}
                emailTo={contactInfoData.acf.email}
                note={contactInfoData.acf.booking_form_note}
            />
            <HomeGallery galleryData={galleryData} />
            {/* 
            
       
            <FAQSection /> */}

        </div>
    )
}


export default Home
