
import React from 'react';
import logo from '../../assets/images/x-logo.png';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

export default class Footer extends React.Component {
  render(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                    <a href="/" className="logo">
                        <div className="logo__img">
                            <img src={logo} className="logo-invert" alt="Crypto Logo"/>
                        </div>
                        <div className="logo__title">
                            xada
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 social-column">
                    <div className="social-block">
                        <div className="social-block__title">Stay Connected</div>
                        <ul className="social-list">
                            <li className="social-list__item">
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
                            </a>
                            </li>
                            <li className="social-list__item">
                            <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'github']} />
                            </a>
                            </li>
                            <li className="social-list__item">
                            <a href="https://medium.com/" target="_blank" rel="noreferrer" className="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'medium']} />
                            </a>
                            </li>
                            <li className="social-list__item">
                            <a href="https://discord.gg/" target="_blank" rel="noreferrer" className="social-list__link">
                            <FontAwesomeIcon className="social-icon" icon={['fab', 'discord']} />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <form action="#" className="form subscribe" id="subscribe-form" noValidate="novalidate">
                    <div className="form__title">Contact Us</div>
                    <div className="form__row">
                        <a className="subscribe__mail" href="mailto:contact@otc@xada.io">
                            otc@xada.io
                        </a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </footer>
    );
  }
}
