
import React from 'react';
import logo from '../../assets/images/x-logo.png';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)
const style = { 
    s1: {animationDelay: "0.2s", opacity: 1},
    s2: {animationDelay: "0.3s", opacity: 1},
    s3: {animationDelay: "0.4s", opacity: 1},
    s4: {animationDelay: "0.5s", opacity: 1},
    s5: {animationDelay: "0.6s", opacity: 1},
    s6: {animationDelay: "0.7s", opacity: 1},
    s7: {animationDelay: "0.8s", opacity: 1},
    s8: {animationDelay: "0.5s", opacity: 1},
    s9: {animationDelay: "0.6s", opacity: 1},
    s10: {animationDelay: "0.7s", opacity: 1},
    s11: {animationDelay: "0.8s", opacity: 1},
    s12: {animationDelay: "0.9s", opacity: 1},
    s13: {animationDelay: "1s", opacity: 1},
    s14: {animationDelay: "1.1s", opacity: 1},
    s15: {animationDelay: "1.2s", opacity: 1},
    s16: {animationDelay: "1s", opacity: 1},
    s17: {animationDelay: "1.2s", opacity: 1},
}
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render(){
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                <div class="col-lg-4">
                    <a href="/" class="logo">
                        <div class="logo__img">
                            <img src={logo} className="logo-invert" alt="Crypto Logo"/>
                        </div>
                        <div class="logo__title">
                            xada
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 social-column">
                    <div class="social-block">
                        <div class="social-block__title">Stay Connected</div>
                        <ul class="social-list">
                            <li class="social-list__item">
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" class="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
                            </a>
                            </li>
                            <li class="social-list__item">
                            <a href="https://github.com/" target="_blank" rel="noreferrer" class="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'github']} />
                            </a>
                            </li>
                            <li class="social-list__item">
                            <a href="https://medium.com/" target="_blank" rel="noreferrer" class="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'medium']} />
                            </a>
                            </li>
                            <li class="social-list__item">
                            <a href="https://www.reddit.com/" target="_blank" rel="noreferrer" class="social-list__link">
                                <FontAwesomeIcon className="social-icon" icon={['fab', 'reddit']} />
                            </a>
                            </li>
                            <li class="social-list__item">
                            <a href="https://discord.gg/" target="_blank" rel="noreferrer" class="social-list__link">
                            <FontAwesomeIcon className="social-icon" icon={['fab', 'discord']} />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <form action="#" class="form subscribe" id="subscribe-form" novalidate="novalidate">
                    <div class="form__title">Contact Us</div>
                    <div class="form__row">
                        <a class="subscribe__mail" href="mailto:contact@otc@xada.io">
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
