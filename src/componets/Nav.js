import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Body } from "./All";
import { Blog } from "./Blog";
import { Case } from "./Case";
import { Code } from "./Dacode";
import { Error } from "./Error";
import { Home } from "./Home";
import { Service } from "./Service";


 const NavBar = () =>{
    return(
            <Router>
                <nav>
                    <div className="nav-logo">
                        <img src='./images/Logo1.svg' />
                    </div>
                    <ul className="nav-item">
                        <li><NavLink to='/' activeclassname='selected'>Home</NavLink></li>
                        <li><NavLink to='/service' activeclassname='selected'>Services</NavLink></li>
                        <li><NavLink to='/case' activeclassname='selected'>Case</NavLink></li>
                        <li><NavLink to='/code' activeclassname='selected'>DaCode Specialists</NavLink></li>
                        <li><NavLink to='/blog' activeclassname='selected'>Blog</NavLink></li>
                    </ul>
                    <button className="btn">Request a quote</button>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/case" element={<Case />} />
                    <Route path="/code" element={<Code />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Body/>
            </Router>
            
           
    )
}
export default NavBar

