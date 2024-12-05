import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ClassComponent from '../components/ClassComponent';
import ShopComponent from '../components/ShopComponent';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
function Home() {
    return (
        <>
            <NavBar />
            <Hero/>
            <AboutMe/>
            <ClassComponent/>
            <ShopComponent/>
            <ContactMe/>
            <Footer/>
        </>
    );
}

export default Home;
