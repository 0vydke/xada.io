
import React from 'react';
import './sectionDistribution.scss';
import chart from '../../assets/images/chart.png'
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
        <section id="token-distribution" class="token-distribution section-padding">
            <div class="container">
                <div class="heading text-center">
                    <div class="animate__animated animate__fadeInUp" style={style.s1}>
                        <h6 class="sub-title">Token Stats</h6>
                        <h2 class="title">Token Distribution</h2>
                    </div>
                    <p class="content-desc animate__animated animate__fadeInUp" style={style.s2}>The ICO usually takes place before the project is completed, and helps fund the expenses
                        <br class="d-none d-xl-block"/>undertaken by the founding team until launch. For some of the larger projects.</p>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-6 pr-5">
                        <div class="content-area">
                            <h4 class="title animate__animated animate__fadeInUp" style={style.s3}>Details</h4>
                            <p class="mt-1 animate__animated animate__fadeInUp" style={style.s4}>To calculate the number of tokens you’ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,</p>
                            <p class="animate__animated animate__fadeInUp" style={style.s5}>To calculate the number of tokens you’ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,</p>
                            <p class="animate__animated animate__fadeInUp" style={style.s6}><span>Symbol:</span> <strong class="grey-accent2">CIC</strong></p>
                            <p class="animate__animated animate__fadeInUp" style={style.s7}><span>Initial Value:</span> <strong class="grey-accent2">1 ETH = 3177.38 CIC</strong></p>
                            <p class="animate__animated animate__fadeInUp" style={style.s8}><span>Type:</span> <strong class="grey-accent2">ERC20</strong></p>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 move-first animate__animated animate__fadeInUp" style={style.s9}>
                        <div class="token-img">
                            <img class="img-fluid" src={chart} alt="token-distribution"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
