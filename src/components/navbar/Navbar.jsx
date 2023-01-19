import React,{useState} from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import kream from "../../assets/kream.png";

const Menu =()=> (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wgpa'>what is GPA</a></p>
  <p><a href='#possibility'>open AI</a></p>
  <p><a href='#Features'>Case studies</a></p>
  <p><a href='#blog'>library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpa__navbar">
      <div className="gpa__navbar-links">
        <div className="gpa__navbar-links_logo">
          <img src={kream} alt="logo" />
          <div className="gpa__navbar-links_container">
          <Menu/>
          </div>
        </div>
        <div className="gpa__navbar-sign">
          <p className="signin">Sign in</p>
          <button type="button">sign up</button>
          <div className="gpa__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="gpa__navbar-menu_container scale-up-center">
                <div className=".gpa__navbar-menu_container-links">
                  <Menu />
                  <div className="gpa__navbar-menu_container-links-sign">
                    <p className="signin2">Sign in</p>
                    <button type="button">sign up</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
