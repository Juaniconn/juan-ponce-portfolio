import React from 'react';
import Header from './../molecules/header'
import Footer from './../molecules/footer'

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout
