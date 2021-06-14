
import React from 'react';
import logo from '../../assets/images/x-logo.png';
import '../../assets/style/style.scss';
import '../../assets/style/theme/bootstrap.css';
import '../../assets/style/theme/template-3d-animation.css';
import '../../assets/fonts/flag-icon-css/css/flag-icon.css';
import '../../assets/fonts/themify/style.css';
import './mainNavbar.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
const style = { 
  s1: {animationDelay: "1s", opacity: 1},
  s2: {animationDelay: "1.1s", opacity: 1},
  s3: {animationDelay: "1.2s", opacity: 1},
  s4: {animationDelay: "1.3s", opacity: 1},
  s5: {animationDelay: "1.4s", opacity: 1},
  s6: {animationDelay: "1.5s", opacity: 1},
  s7: {animationDelay: "1.6s", opacity: 1},
  s8: {animationDelay: "1.7s", opacity: 1}
}
export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown1: false,
      showDropdown2: false,
      isNavExpanded: false
    };
  
    this.setIsNavExpanded = (isNavExpanded) => {
      this.setState({ isNavExpanded: isNavExpanded });
    }
  
    this.handleClick = (e) => {
      if (this.node.contains(e.target)) {
        // if clicked inside menu do something
      } else {
        // If clicked outside menu, close the navbar.
        this.setState({ isNavExpanded: false });
      }
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);      
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }
  
  render(){
    return (
      <div ref={node => this.node = node}>
        <Navbar variant="dark" className={`main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1 ${ this.props.scrollTop }`} 
        expand="lg" 
        collapseOnSelect
        onToggle={this.setIsNavExpanded}
        expanded={this.state.isNavExpanded}>
          <div className="container">
              <Navbar.Brand href="#home" className="navbar-brand animate__animated animate__fadeInDown" style={style.s1}>
                  <img src={logo} className="logo-invert" alt="Crypto Logo"/>
                  <span className="brand-text"><span className="font-weight-bold"></span>xada</span>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ml-auto" id="navbarCollapse">
              <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              >
                <Nav.Link className="nav-link animate__animated animate__fadeInDown" style={style.s2} href="#about">About</Nav.Link>
              </Link>
              <Link
              activeClass="active"
              to="problem-solution"
              spy={true}
              smooth={true}
              duration={500}
              >
                <Nav.Link className="nav-link animate__animated animate__fadeInDown" style={style.s3} href="#problem-solution">Solutions</Nav.Link>
              </Link>
              <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              duration={500}
              >
                <Nav.Link className="nav-link animate__animated animate__fadeInDown" style={style.s4} href="#roadmap">Roadmap</Nav.Link>
              </Link>
              <Link
              activeClass="active"
              to="token-distribution"
              spy={true}
              smooth={true}
              duration={500}
              >
                <Nav.Link className="nav-link animate__animated animate__fadeInDown" style={style.s5} href="#token-distribution">Token</Nav.Link>
              </Link>
              <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              >
                <Nav.Link className="nav-link animate__animated animate__fadeInDown" style={style.s6} href="#team">Team</Nav.Link>
              </Link>
              <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
              >
                <Nav.Link className="nav-link animate__animated animate__fadeInDown" style={style.s7} href="#faq">FAQ</Nav.Link>
              </Link>
            </Nav>
            </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
    );
  }
}
