
import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/style/style.scss';
import '../../assets/style/theme/bootstrap.css';
import '../../assets/style/theme/template-3d-animation.css';
import '../../assets/fonts/flag-icon-css/css/flag-icon.css';
import '../../assets/fonts/themify/style.css';
import './mainNavbar.scss';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
export default class MainNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDropdown1: false,
      showDropdown2: false
    };
  }
  render(){
    return (
      <Navbar variant="dark" className={`main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1 ${ this.props.scrollTop }`}>
        <div className="container">
          <Navbar.Brand href="#home" className="navbar-brand animated" data-animation="fadeInDown" data-animation-delay="1s">
              <img src={logo} alt="Crypto Logo"/>
              <span className="brand-text"><span className="font-weight-bold">Crypto</span> ICO</span>
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"/>
          <Nav className="collapse navbar-collapse" id="navbarCollapse">
          <div id="navigation" className="navbar-nav ml-auto">
            <ul className="navbar-nav mt-1">
                <li className="nav-item " data-animation="fadeInDown">
                  <Nav.Link className="nav-link" href="index.html#about">What is ICO</Nav.Link>
                </li>
              <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.2s">
                <Nav.Link className="nav-link" href="index.html#about">Solutions</Nav.Link>
              </li>
              <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.3s">
                <Nav.Link className="nav-link" href="index.html#about">Whitepaper</Nav.Link>
              </li>
              <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.4s">
                <Nav.Link className="nav-link" href="index.html#about">Token Sale</Nav.Link>
              </li>
              <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                <Nav.Link className="nav-link" href="index.html#about">Roadmap</Nav.Link>
              </li>
            
              <li className="dropdown show animated" data-animation="fadeInDown" data-animation-delay="1.6s">
                <Dropdown>
                {/* onMouseLeave={() => this.setState({ showDropdown1: false})}
                onMouseOver={() => this.setState({ showDropdown1: true})}> */}
                    <Dropdown.Toggle className="dropdown-toggle white" href="#" role="button" id="more" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</Dropdown.Toggle>
                    <Dropdown.Menu show={this.state.showDropdown1} className="dropdown-menu" aria-labelledby="more">
                        <Dropdown.Item className="dropdown-item" href="index.html#mobile-app">App</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="index.html#team">Team</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="index.html#faq">FAQ</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="index.html#contact">Contact</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="template-404.html">404</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="template-inner-page-with-sidebar.html">Sample Page</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="dropdown show mr-4 animated" data-animation="fadeInDown" data-animation-delay="1.7s">
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-toggle" href="#" role="button" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flag-icon flag-icon-us"></span> EN</Dropdown.Toggle>
                  <Dropdown.Menu 
                  onMouseLeave={() => this.setState({ showDropdown2: false})}
                  show={this.state.showDropdown2} 
                  className="dropdown-menu"
                  >
                    <Dropdown.Item className="dropdown-item" href="#"><span className="flag-icon flag-icon-de"></span> GN</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#"><span className="flag-icon flag-icon-es"></span> SP</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#"><span className="flag-icon flag-icon-mq"></span> FR</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              </ul>
              <span id="slide-line"></span>
              <Form className="form-inline mt-2 mt-md-0">
                  <Button className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated" data-animation="fadeInDown" data-animation-delay="1.8s" href="https://pixinvent.com/demo/crypto-ico-admin/html/ltr/vertical-menu/account-login.html" target="_blank">Sign in</Button>
              </Form>
            </div>
          </Nav>
          </div>
        </Navbar>
    );
  }

}
