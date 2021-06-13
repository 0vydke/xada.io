import React from 'react';
import './sectionHead.scss';
import img from '../../assets/images/bubbles.png';
import base from '../../assets/images/svg/svg-animation/base.svg';
import logoBase from '../../assets/images/svg/svg-animation/logo-base.svg';
import iconBaseShadow from '../../assets/images/svg/svg-animation/icon-base-shadow.svg';
import iconBaseMobile from '../../assets/images/svg/svg-animation/icon-base-mobile.svg';
import iconBaseHome from '../../assets/images/svg/svg-animation/icon-base-home.svg';
import logo from '../../assets/images/svg/svg-animation/logo.svg';
import baseShadow from '../../assets/images/svg/svg-animation/base-shadow.svg';
import logoShadow from '../../assets/images/svg/svg-animation/logo-shadow.svg';
import baseBTC from '../../assets/images/svg/svg-animation/icon-base-btc.svg';
import baseETH from '../../assets/images/svg/svg-animation/icon-base-eth.svg';
import baseNEO from '../../assets/images/svg/svg-animation/icon-base-neo.svg';
import baseCAR from '../../assets/images/svg/svg-animation/icon-base-car.svg';
import BTC from '../../assets/images/svg/svg-animation/btc.svg';
import ETH from '../../assets/images/svg/svg-animation/eth.svg';
import NEO from '../../assets/images/svg/svg-animation/neo.svg';
import CAR from '../../assets/images/svg/svg-animation/car.svg';
import Mobile from '../../assets/images/svg/svg-animation/mobile.svg';
import Home from '../../assets/images/svg/svg-animation/home.svg';
import Physical from '../../assets/images/svg/svg-animation/physical.svg';
import Cic from '../../assets/images/svg/svg-animation/cic-blockchain.svg';
import Digital from '../../assets/images/svg/svg-animation/digital.svg';
const style = { 
  s1: {animationDelay: "1.5s", opacity: 1},
  s2: {animationDelay: "1.6s", opacity: 1, fontSize: '26px'},
  s3: {animationDelay: "1.7s", opacity: 1},
  s4: {animationDelay: "1.8s", opacity: 1},
  s5: {width: "100%", height: "100%"},
  s6: {animationDelay: "0.5s", opacity: 1},
  s7: {animationDelay: "2s", opacity: 1},
  s8: {animationDelay: "1.9s", opacity: 1, display: "flex"},
  s9: {animationDelay: "2s", opacity: 1},
  s10: {animationDelay: "1.5s", opacity: 1},
  s11: {animationDelay: "2s", opacity: 1},
  s12: {animationDelay: "1.7s", opacity: 1},
  s13: {animationDelay: "2s", opacity: 1},
  s14: {animationDelay: "1.6s", opacity: 1},
  s15: {animationDelay: "1.8s", opacity: 1},
  s16: {animationDelay: "1.4s", opacity: 1},
  s17: {animationDelay: "0.8s", opacity: 1},
  s18: {animationDelay: "1.4s", opacity: 1},
  s19: {animationDelay: "1.4s", opacity: 1},
  s20: {animationDelay: "1.4s", opacity: 1},
  s21: {animationDelay: "2.4s", opacity: 1},
  s22: {animationDelay: "1.4s", opacity: 1},
  s23: {animationDelay: "2.2s", opacity: 1},
  s24: {animationDelay: "2.4s", opacity: 1},
  s25: {animationDelay: "1.8s", opacity: 1},
  s26: {animationDelay: "1.2s", opacity: 1},
  s27: {animationDelay: "2.4s", opacity: 1},
  s28: {animationDelay: "3s", opacity: 1},
  s29: {animationDelay: "2.1s", opacity: 1},
  s30: {animationDelay: "2.2s", opacity: 1},
  s31: {animationDelay: "2.4s", opacity: 1},
  s32: {animationDelay: "3s", opacity: 1},
  s33: {animationDelay: "2.3s", opacity: 1},
  s34: {animationDelay: "2.4s", opacity: 1},
  s35: {animationDelay: "1.4s", opacity: 1},
  s36: {animationDelay: "2.4s", opacity: 1},
  s37: {animationDelay: "2.4s", opacity: 1},
  s38: {animationDelay: "2.4s", opacity: 1},
  s39: {animationDelay: "2.4s", opacity: 1},
  s40: {animationDelay: "2.4s", opacity: 1},
  s41: {animationDelay: "2.4s", opacity: 1},
}
export default class SectionHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render(){
    return (
      <section class="head-area" id="head-area">
    <div class="head-content d-flex align-items-center">
        <div class="container">
            <div class="banner-wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="banner-content pt-5">
                            <h1 class="best-template animate__animated animate__fadeInUp" style={style.s1}>A Top-tier Decentralized Exchange<br class="d-none d-xl-block"></br>Built on the Cardano Ecosystem </h1>
                            <h2 class="d-block white animate__animated animate__fadeInUp" style={style.s2}>No middlemen, No censorship. <br class="d-none d-xl-block"></br>Pure DeFi innovation. </h2>
                            <div class="mt-5">
                                <a href="#token-sale-mobile-app" class="redo-token btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animate__animated animate__fadeInUp" style={style.s3}>Private Sale</a>
                                <a href="#whitepaper" class="redo-whitepaper btn btn-lg btn-gradient-purple btn-glow mb-2 animate__animated animate__fadeInUp" style={style.s4}>White paper</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 move-first">
                        <div className="animate__animated animate__fadeInUp" style={style.s8}>
                            <img className="bubble-img rotate-animation" style={style.s8} src={img} alt="Circles"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
  }
}
