import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>);

}
export default App;
