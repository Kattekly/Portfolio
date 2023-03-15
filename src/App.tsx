import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import {Projects} from "./Projects/Projects";
import DistantWork from "./DistantWork/DistantWork";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {Skills} from "./Skills/Skills";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
