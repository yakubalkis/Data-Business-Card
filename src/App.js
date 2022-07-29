import React from "react";
import Head from '../src/components/header'
import Footer from '../src/components/footer'
import Main from '../src/components/main'

export default function App(){
    return (
        <div className="container">
            <Head/>
            <Main/>
            <Footer/>
        </div>
    )
}