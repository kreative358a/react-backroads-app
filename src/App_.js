import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import { pageLinks } from "./data";
import { socialLinks } from "./data";
import logo from "../src/images/logo.svg";
function App() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* <PageLinks parentClass='nav-links' itemClass='nav-link' /> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id} >
                  <a href={link.href} className="nav-link">{link.text}</a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                // <li key={link.id}>
                //   <a
                //     href={link.href}
                //     target="_blank"
                //     rel="noreferrer"
                //     className="nav-icon"
                //   >
                //     <i className={link.icon}></i>
                //   </a>
                // </li>
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
              // return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
            })}
          </ul>
        </div>
      </nav>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
