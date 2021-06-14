
import React from 'react';
import './sectionAbout.scss';
import "animate.css/animate.min.css";
import about from '../../assets/images/about.png';
import line from '../../assets/images/line.jpg'
const style = { 
    s1: {animationDelay: "0.5s", opacity: 1},
    s2: {animationDelay: "0.6s", opacity: 1},
    s3: {animationDelay: "0.7s", opacity: 1, textAlign: 'right'},
    s4: {animationDelay: "0.8s", opacity: 1, textAlign: 'right'},
    s5: {animationDelay: "0.7s", opacity: 1},
    s6: {animationDelay: "0.8s", opacity: 1},
    s7: {animationDelay: "0.9s", opacity: 1},
    s8: {maxWidth: '420px', padding: '30px', margin: 'auto'},
    s9: {display: "flex", justifyContent: 'center'}
}
export default class SectionAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onHide: false
        };
      }
  render(){
    return (
        <section className="about section-padding-1" id="about">
            <div className="container">
                <div className="heading text-center">
                    <div style={style.s1}>
                        <div style={style.s9}>
                        <img src={line} alt="blue line" className="title-line"/>
                        <h2 className="title">About Xada</h2>
                        <img src={line} alt="blue line" className="title-line"/>
                        </div>
                    </div>
                    <p className="content-desc animate__animated animate__fadeInUp" style={style.s2}>XADA is an automated liquidity protocol based on the Cardano ecosystem, <br className="d-none d-xl-block"></br>facilitating completely decentralized and non-custodial trading.</p>
                </div>
                <div className="content-area">
                    <div className="row">
                        <div className="col-md-12 col-lg-5 animate__animated animate__fadeInUp" style={{display:'flex'}}>
                            <img src={about} alt="xada and cardano logos inside half circles" style={style.s8} className="resp-img section-img0"/>
                        </div>
                        <div className="col-md-12 col-lg-7 animate__animated animate__fadeInUp" style={{display: 'flex'}}>
                            <div style={{margin: 'auto'}}>
                            <p className={ this.props.aboutScroll } style={style.s3}>We have poured our hearts and souls into XADA with one vision in mind — to become the go-to decentralized exchange within the Cardano network. XADA eliminates all middlemen and all unnecessary complexity that gets in the way of censorship-resistant and secure trading on the Cardano ecosystem. We will empower all XADA users to trade effortlessly and at bottom-low fees that incentivize everyone to make the switch from Ethereum.</p>
                            <p className={ this.props.aboutScroll } style={style.s4}>Unlike our competitors, XADA has no order book. We ensure ultra-low fees by removing all of the intermediaries and all of the complexity out of the equation. Instead, we place full control in the hands of the user, giving them complete freedom to dispose of their assets in any way they see fit, without censorship or ceding control to any centralized authority.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
