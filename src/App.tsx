import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import DistantWork from "./DistantWork/DistantWork";
import Contacts from "./Contacts/Contacts";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
        </div>
    );
}

export default App;
