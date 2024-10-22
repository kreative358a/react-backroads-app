import logo from "../images/logo.svg";
import { socialLinks } from "../data";
// import { pageLinks } from '../data'
// import PageLinks from "./PageLinks";
// import PageLinks from "./PageLinks";
// import SocialLink from "./SocialLink";
import { pageLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        {/* <PageLinks parentClass='nav-links' itemClass='nav-link' /> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id} className="nav-link">
                <a href={link.href}>{link.text}</a>
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
  );
};
export default Navbar;
