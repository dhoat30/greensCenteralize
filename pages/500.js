import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import getContactInfo from '../util/get-contact-info'

function termsConditions() {

  return (
    <React.Fragment> 
        <Head>
        <meta name="robots" content="noindex"/>
        </Head>    

    <div id='oopss'>
    <div id='error-text'>
        
        <span>404 PAGE</span>
        <p className="p-a">
           . The page you were looking for could not be found</p>
        <p className="p-b">
            ... Back to previous page
        </p>
        <Link href="/">
      <a className="back">
        Go back home
      </a>
    </Link>
    </div>
</div>
  

    </React.Fragment>     

  )
}

export default termsConditions
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const contactInfoData = await getContactInfo("greens-russell") 

  return {
    props: {
   
     contactInfoData: contactInfoData[0]

    },
    revalidate: 86400
  }
}