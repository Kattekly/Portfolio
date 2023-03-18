import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {Projects} from "./Projects/Projects";
import {DistantWork} from "./DistantWork/DistantWork";
import Footer from "./Footer/Footer";
import {Skills} from "./Skills/Skills";
import {ContactForm} from "./Contacts/Contacts";
import {Main} from "./Main/Main";
import {ScrollButton} from "./Common/Components/ScrollButton/ScrollButton";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <ContactForm/>
            <Footer/>
            <ScrollButton/>
        </div>
    );
}

export default App;
