import React, { useState } from 'react';
import Layout from '../Components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import '../Components/Layout.css'
import Head from 'next/head'
import { ContactInfoContextProvider } from '../store/contact-info-context'
import { LoadingContextProvider } from '../store/loading-context'
import Router from 'next/router'
import LoadingOverlay from '../Components/UI/LoadingOverlay/LoadingOverlay';
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  const [showLoading, setShowLoading] = useState(false)

  // show loading overlay
  Router.events.on('routeChangeStart', (url) => {
    setShowLoading(true)
  })

  // hide  loading overlay 
  Router.events.on('routeChangeComplete', (url) => {
    setShowLoading(false)
  })
  return (
    <React.Fragment>
      <SimpleReactLightbox>

        <ContactInfoContextProvider>
          <LoadingContextProvider>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Layout>
                <Head>
                  <meta charSet="utf-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Component {...pageProps} />
                <LoadingOverlay show={showLoading} />
              </Layout>
            </ThemeProvider>
          </LoadingContextProvider>
        </ContactInfoContextProvider>
      </SimpleReactLightbox>

    </React.Fragment>
  )
}

export default MyApp

const theme = {
  colors: {
    primary: "#fafafa",
  },

};
const GlobalStyle = createGlobalStyle`

* {
        box-sizing: border-box !important;
      }

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box !important;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; 
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
    padding: 0;
}

`