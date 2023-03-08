import * as React from "react";
import './Navbar.css'
import {BrowserRouter as Router, Link, Routes, Route, NavLink} from 'react-router-dom';
import '../Point Home/Landinglogo'



class Navbar extends React.Component {
    
  render() {
    return (
        <body>
            <header>


                <div className="logo">KraussMaffei</div>
                
                <div className="hamburger">
                    <div className="line"></div>
                     <div className="line"></div>
                     <div className="line"></div>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li style={{listStyle:'none'}}>
                            <Link className="text-link" to='/'>Home</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link className="text-link" to='/Brand'>Brand</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link className="text-link" to='/Site_Parsdorf'>Site&nbsp;Parsdorf</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link className="text-link" to='/Technologies'>Technologies</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <a href="https://www.kraussmaffei.com/de/startseite" target="_blank" rel="noreferrer" className="text-link">Website</a>
                        </li>
                    </ul>
                </nav>
                
            </header>
        </body>
    );
  }
}

export default Navbar
