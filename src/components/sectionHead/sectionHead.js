
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
  s2: {animationDelay: "1.6s", opacity: 1},
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
                            <h1 class="best-template animate__animated animate__fadeInUp" style={style.s1}>A Premier Decentralized Exchange<br class="d-none d-xl-block"></br>Built on the Cardano Ecosystem </h1>
                            <h3 class="d-block white animate__animated animate__fadeInUp" style={style.s2}>No middlemen, No censorship. Pure DeFi innovation. </h3>
                            <div class="mt-5">
                                <a href="#token-sale-mobile-app" class="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animate__animated animate__fadeInUp" style={style.s3}>Private Sale</a>
                                <a href="#whitepaper" class="btn btn-lg btn-gradient-purple btn-glow mb-2 animate__animated animate__fadeInUp" style={style.s4}>Whitepaper</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 move-first">
                        <div className="animate__animated animate__fadeInUp" style={style.s8}>
                            <img className="bubble-img rotate-animation" style={style.s8} src={img} alt="Circles"/>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857 807" width="857" height="807" preserveAspectRatio="xMidYMid meet" style={style.s5}>
                                <g clip-path="url(#svg_animation_mask)">
                                    <g transform="matrix(1,0,0,1,-1.93,468.7)" opacity="1">
                                        <image class="animate__animated animate__fadeInRight" width="558px" height="339px" preserveAspectRatio="xMidYMid slice" xlinkHref={base} style={style.s6}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,60,580)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInUp" width="130px" height="130px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseShadow} style={style.s7}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,60.8,560.9)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="130px" height="130px" preserveAspectRatio="xMidYMid slice" xlinkHref={baseBTC} style={style.s8}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,215,580)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInUp" width="90px" height="90px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseShadow} style={style.s9}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,215,545)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="90px" height="130px" preserveAspectRatio="xMidYMid slice" xlinkHref={baseETH} style={style.s10}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,238,670)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInUp" width="120px" height="120px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseShadow} style={style.s11}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,240.8,660.9)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="120px" height="120px" preserveAspectRatio="xMidYMid slice" xlinkHref={baseNEO} style={style.s12}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,97,560)" opacity="1">
                                        <image class="svg-elements-2 animate__animated animate__fadeInUp" width="60px" height="60px" preserveAspectRatio="xMidYMid slice" xlinkHref={BTC} style={style.s13}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,230,550)" opacity="1">
                                        <image class="svg-elements-1 animate__animated animate__fadeInUp" width="60px" height="60px" preserveAspectRatio="xMidYMid slice" xlinkHref={ETH} style={style.s14}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,270 ,645)" opacity="1">
                                        <image class="svg-elements-1 animate__animated animate__fadeInUp" width="70px" height="70px" preserveAspectRatio="xMidYMid slice" xlinkHref={NEO} style={style.s15}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,152.1,445.61)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInRight" width="406px" height="274px" preserveAspectRatio="xMidYMid slice" xlinkHref={baseShadow} style={style.s16}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,151.07,301.7)" opacity="0.95">
                                        <image class="animate__animated animate__fadeInRight" width="558px" height="339px" preserveAspectRatio="xMidYMid slice" xlinkHref={base} style={style.s17}></image>
                                    </g>                       
                                    <g transform="matrix(1,0,0,1,428.5,403.5)" opacity="1">
                                        <g opacity="1" transform="matrix(1.0196,0,0,0.9676,-49.875,71.125)">
                                            <path class="animated path" data-animation="path" stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="4" d=" M57.584999084472656,53.77799987792969 C41.18600082397461,60.93600082397461 21.354000091552734,65.125 0,65.125 C-56.362789154052734,65.125 -102.125,35.94248580932617 -102.125,0 C-102.125,-35.94248580932617 -56.362789154052734,-65.125 0,-65.125 C0,-65.125 0,-65.125 0,-65.125 C56.362789154052734,-65.125 102.125,-35.94248580932617 102.125,0 C102.125,22.325000762939453 84.47000122070312,42.04199981689453 57.584999084472656,53.77799987792969" style={style.s18}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,345,595)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path class="animated path-reverse" data-animation="path-reverse" stroke-linecap="butt" stroke-linejoin="miter" stroke-dashoffset="20" fill="none" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="3" d="M0.26,101.431l65-45  c0,0,5.4-1.4,5-25l1-10c0,0-1.2-5.6,6-8l50-30c0,0,7.4-3.6,1-7l-65-38" style={style.s19}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,290,545)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path class="animated path-reverse" data-animation="path-reverse" stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="3" d="M0.239,42.447l11-6  c0,0,5-1.2,4-25v-9c0,0-2-5.8,6-9l16-8" style={style.s20}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,175,430)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path class="animated path" data-animation="path" stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="3" d="M101.68,24.545l-25-15  c0,0-6.14-6-14-1l-28,17c0,0-6.4,5.16-5-30v-20c0,0,0.8-5.6-4-5l-35,25c0,0-5.2,1.6-4,18v90c0,0-1.6,9.8,6,11l40,25c0,0,7,2.6,2,7  l-35,20" style={style.s21}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,255,345)" opacity="0.5">
                                        <image class="animate__animated animate__fadeInRight" width="250px" height="260px" preserveAspectRatio="xMidYMid slice" xlinkHref={logoBase} style={style.s22}></image>
                                    </g>
                                    <g transform="matrix(0.1385,0,0,0.1175,275,385)" opacity="0.65">
                                        <image class="animate__animated animate__fadeInUp" width="1500px" height="1500px" preserveAspectRatio="xMidYMid slice" xlinkHref={logoShadow} style={style.s23}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,310,410)" opacity="1">
                                        <image class="cic-logo cic-logo-animation" width="130px" height="89px" preserveAspectRatio="xMidYMid slice" xlinkHref={logo} style={style.s24}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,305.1,277.61)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInRight" width="406px" height="274px" preserveAspectRatio="xMidYMid slice" xlinkHref={baseShadow} style={style.s25}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,301.07,133.7)" opacity="0.95">
                                        <image class="animate__animated animate__fadeInRight" width="558px" height="339px" preserveAspectRatio="xMidYMid slice" xlinkHref={base} style={style.s26}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,320.5,330.5)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path class="animated path" data-animation="path" stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="3" d="M32.208,82.43l-35-20  c0,0-6.714-2.571,1-7l26-15c0,0,4.857-1.143,8-8v-35c0,0,0.857-5.81,3-6l70-45" style={style.s27}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,415,235)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInUp" width="100px" height="100px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseShadow} style={style.s28}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,408.62,240.74)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="109px" height="68px" preserveAspectRatio="xMidYMid slice" xlinkHref={baseCAR} style={style.s29}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,420.8799,200.27)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="80px" height="80px" preserveAspectRatio="xMidYMid slice" xlinkHref={CAR} style={style.s30}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,475,410)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path class="animated path" data-animation="path" stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="3" d="M0.261,90.447l50,30  c0,0,4.15,5.17,14,0l12-6c0,0,6-2,5-8v-50c0,0-0.5-9,9-12l80-45c0,0,5.75-3.5,0-7l-32-16" style={style.s31}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,565,300)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInUp" width="120px" height="120px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseShadow} style={style.s32}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,565,310)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="122px" height="78px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseMobile} style={style.s33}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,600,280)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="51px" height="78px" preserveAspectRatio="xMidYMid slice" xlinkHref={Mobile} style={style.s34}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,495,260)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path class="animated path-reverse" data-animation="path-reverse" stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(99,125,221)" stroke-opacity="1" stroke-width="3" d="M102.684,0v20  c0.666,7.167-9,11-9,11l-130,75c-11.25,4.5-9,13-9,13v50" style={style.s35}></path>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,570,150)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInUp" width="200px" height="200px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseShadow} style={style.s36}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,570.8,140.9)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="200px" height="150px" preserveAspectRatio="xMidYMid slice" xlinkHref={iconBaseHome} style={style.s37}></image>
                                    </g>
                                     <g transform="matrix(1,0,0,1,600,90)" opacity="1">
                                        <image class="animate__animated animate__fadeInUp" width="140px" height="140px" preserveAspectRatio="xMidYMid slice" xlinkHref={Home} style={style.s38}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,734,400)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInRight" width="120px" height="26px" preserveAspectRatio="xMidYMid slice" xlinkHref={Physical} style={style.s39}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,602,569)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInRight" width="180px" height="24px" preserveAspectRatio="xMidYMid slice" xlinkHref={Cic} style={style.s40}></image>
                                    </g>
                                    <g transform="matrix(1,0,0,1,432,745)" opacity="0.8">
                                        <image class="animate__animated animate__fadeInRight" width="80px" height="24px" preserveAspectRatio="xMidYMid slice" xlinkHref={Digital} style={style.s41}></image>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="svg_animation_mask">
                                        <rect width="857" height="807" x="0" y="0"></rect>
                                    </clipPath>
                                </defs>
                            </svg> */}
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
