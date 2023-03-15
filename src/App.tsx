import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import {Projects} from "./Projects/Projects";
import {DistantWork} from "./DistantWork/DistantWork";
import Footer from "./Footer/Footer";
import {Skills} from "./Skills/Skills";
import {ContactForm} from "./Contacts/Contacts";

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
        </div>
    );
}

export default App;
