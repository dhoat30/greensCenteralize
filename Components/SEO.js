import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function SEO({ seo }) {
    const router = useRouter()

    return (
        <Head>
            <link rel="icon" href="/images/favicon.ico" />
            <title>{seo.title}</title>
            <meta name="description"
                content={seo.description.length > 160
                    ? seo.description.substring(0, 160)
                    : seo.description
                }>

            </meta>

            {/* open graph meta */}
            <meta property="og:title" content={`${seo.title}`} key="ogtitle" />
            <meta property="og:description" content={seo.description.length > 160
                ? seo.description.substring(0, 160)
                : seo.description
            }
                key="ogdesc" />
            <meta property="og:url" content={`https://greensnz.com${router.asPath}`} key="ogurl" />
            <meta property="og:image" content={seo.imageSrc} key="ogimage" />
            <meta property="og:site_name" content={"Greens Restaurant"} key="ogsitename" />



            {/* tracking codes */}
                    {/* google fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-MTWWJGH');`}}>
                    </script>
        </Head>
    )
}

export default SEO
