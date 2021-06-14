import React from 'react';
import './sectionHead.scss';
import img from '../../assets/images/bubbles.png';
import pdf from '../../XADA_whitepaper.pdf'

const style = { 
  s1: {animationDelay: "1.5s", opacity: 1},
  s2: {animationDelay: "1.6s", opacity: 1, fontSize: '26px'},
  s3: {animationDelay: "1.7s", opacity: 1},
  s4: {animationDelay: "1.8s", opacity: 1},
  s5: {width: "100%", height: "100%"},
  s6: {animationDelay: "0.5s", opacity: 1},
  s7: {animationDelay: "2s", opacity: 1},
  s8: {animationDelay: "1.9s", opacity: 1, display: "flex"},
}
export default class SectionHead extends React.Component {

  render(){
    return (
      <section className="head-area" id="head-area">
        <div className="head-content d-flex align-items-center">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-content pt-5">
                                <h1 className="best-template animate__animated animate__fadeInUp" style={style.s1}>A Top-tier Decentralized Exchange<br className="d-none d-xl-block"></br>Built on the Cardano Ecosystem </h1>
                                <h2 className="d-block white animate__animated animate__fadeInUp" style={style.s2}>No middlemen, No censorship. <br className="d-none d-xl-block"></br>Pure DeFi innovation. </h2>
                                <div className="mt-5">
                                    <a href="mailto:contact@otc@xada.io" className="redo-token btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animate__animated animate__fadeInUp" style={style.s3}>Private Sale</a>
                                    <a href={pdf} without rel="noopener noreferrer" target="_blank" className="redo-whitepaper btn btn-lg btn-gradient-purple btn-glow mb-2 animate__animated animate__fadeInUp" style={style.s4}>White paper</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 move-first">
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
