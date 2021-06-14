
import React from 'react';
import './sectionDistribution.scss';
import chart from '../../assets/images/chart.png';
import line from '../../assets/images/line.jpg';
const style = { 
    s1: {animationDelay: "0.3s", opacity: 1},
    s2: {animationDelay: "0.4s", opacity: 1},
    s3: {animationDelay: "0.5s", opacity: 1},
    s4: {animationDelay: "0.6s", opacity: 1},
    s5: {animationDelay: "0.7s", opacity: 1},
    s6: {animationDelay: "0.8s", opacity: 1},
    s7: {animationDelay: "0.9s", opacity: 1},
    s8: {animationDelay: "1s", opacity: 1},
    s9: {animationDelay: "1.1s", opacity: 1}
}
export default class SectionDistribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render(){
    return (
        <section id="token-distribution" className="token-distribution section-padding">
            <div className="container">
                <div className="heading text-center">
                    <div className="animate__animated animate__fadeInUp" style={style.s1}>
                        <div className="title-div">
                        <img src={line} alt="blue line" className="title-line"/>
                        <h2 className="title">Token distribution</h2>
                        <img src={line} alt="blue line" className="title-line"/>
                        </div>
                    </div>
                    <p className="content-desc animate__animated animate__fadeInUp" style={style.s2}>
                    The ICO usually takes place before the project is completed, and helps fund the expenses<br className="d-none d-xl-block"/>
undertaken by the founding team until launch. For some of the larger projects.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-6 pr-5"style={{display: 'flex'}}>
                        <div className="content-area" style={{margin: 'auto'}}>
                            <h4 className="title animate__animated animate__fadeInUp" style={style.s3}>Details</h4>
                            <br/>
                            <p className="mt-1 animate__animated animate__fadeInUp" style={style.s4}>To calculate the number of tokens you’ll receive, you can follow the
                            following formula. Note that this applies to public presale contributions
                            only. If you participated through a syndicate or private presale</p>
                            <p className="animate__animated animate__fadeInUp" style={style.s5}>To calculate the number of tokens you’ll receive, you can follow the
                            following formula. Note that this applies to public presale contributions
                            only. If you participated through a syndicate or private presale</p>
                            <p className="animate__animated animate__fadeInUp" style={style.s6}><span>Symbol:</span> <strong className="grey-accent2">CIC</strong></p>
                            <p className="animate__animated animate__fadeInUp" style={style.s7}><span>Initial Value:</span> <strong className="grey-accent2">1 ETH = 3177.38 CIC</strong></p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 move-first animate__animated animate__fadeInUp" style={style.s9}>
                        <div className="token-img">
                            <img className="img-fluid" src={chart} alt="token-distribution"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
