
import React from 'react';
import './sectionSolutions.scss';
import solutions from '../../assets/images/solutions-graphic.png';
import problems from '../../assets/images/problems-graphic.png';
import line from '../../assets/images/line.jpg';
const style = { 
    s1: {animationDelay: "0.3s", opacity: 1},
    s2: {animationDelay: "0.4s", opacity: 1},
    s3: {animationDelay: "0.2s", opacity: 1},
    s4: {animationDelay: "0.4s", opacity: 1},
    s5: {animationDelay: "0.6s", opacity: 1},
    s6: {animationDelay: "0.5s", opacity: 1, maxWidth: '490px', margin: 'auto'},
    s7: {animationDelay: "0.5s", opacity: 1, maxWidth: '500px', margin: 'auto'},
    s8: {animationDelay: "0.2s", opacity: 1, textAlign: 'right'},
    s9: {animationDelay: "0.5s", opacity: 1, textAlign: 'right'},
    s10: {animationDelay: "0.6s", opacity: 1, textAlign: 'right'},
    s11: {animationDelay: "0.7s", opacity: 1, textAlign: 'right'},
    s12: {animationDelay: "0.8s", opacity: 1},
    s13: {display: "flex", justifyContent: 'center'}
}
export default class SectionSolutions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render(){
    return (
        <section id="problem-solution" className="problem-solution section-pro section-padding ">
            <div className="container">
                <div className="heading text-center">
                    <div className={ this.props.solutionsScroll } style={style.s1}>
                        <div className="title-div">
                        <img src={line} alt="blue line" className="title-line"/>
                        <h2 className="title">Problems and solutions</h2>
                        <img src={line} alt="blue line" className="title-line"/>
                        </div>
                    </div>
                    <p className={`content-desc ${ this.props.solutionsScroll }`} style={style.s2}>The current Ethereum-focused status quo — where users are expected to accept 100-250$ <br className="d-none d-xl-block"/>gas fees and speeds of just 15 transactions/second — will soon be history.
                        </p>
                </div>
                <div className="problems">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="heading mb-4">
                                <h4 className={`title ${ this.props.solutionsScroll }`} style={style.s3}>Problems</h4>
                            </div>
                            <p className={ this.props.solutionsScroll } style={style.s4}>
                                At the moment, the Ethereum network is still very popular. But as the
                                network gets slower and more expensive, many market participants
                                are already migrating to other networks that are more reliable and
                                don’t charge exorbitant gas fees.</p>
                            <p className={ this.props.solutionsScroll } style={style.s5}>The world of crypto moves fast, so it is essential for traders not to fall
                                behind. Cardano, which has significantly lower costs and substantially
                                faster transaction speeds, is likely to be the next go-to destination
                                because it enables all users to enjoy the benefits of ERC20 standard
                                tokens at an affordable price.</p>

                        </div>
                        <div className="col-md-12 col-lg-6 text-center"  style={{display: 'flex'}}>
                            <img src={problems} className={`problems-img section-img1 resp-img ${ this.props.solutionsScroll }`} alt="problems-graphic" style={style.s6}/>
                        </div>
                    </div>
                </div>
                <div className="solutions mt-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 text-center" style={{display: 'flex'}}>
                            <img src={solutions} className={`solutions-img section-img2 resp-img ${ this.props.solutionsScroll }`} alt="problems-graphic" style={style.s7}/>
                        </div>
                        <div className="col-md-12 col-lg-6 move-first">
                            <div className="heading mb-4">
                                <h4 className={`title ${ this.props.solutionsScroll }`} style={style.s8}>Solutions</h4>
                            </div>
                            <p className={ this.props.solutionsScroll } style={style.s9}>Cardano promises to uproot the ineffective Ethereum-focused status
quo within the world of crypto, and is bound to become the new DeFi
standard-setter. Being run by a non-profit foundation, Cardano will
introduce open and inclusive technological standards which will work in
the interest of all stakeholders.</p>
                            <p className={ this.props.solutionsScroll } style={style.s10}>Founded by Charles Hoskinson, a co-founder of Ethereum, Cardano
utilises a scientific, evidence-based approach which is widely
anticipated to usher in a completely new way of doing business
within the world of crypto.</p>
                            <p className={ this.props.solutionsScroll } style={style.s11}>As soon as Cardano rolls out smart contract support in 2021 Q3, XADA will
be there, providing traders with access to a non-custodial protocol that
facilitates quick token swap, liquidity provision, and a wide-reaching
reorientation of the DeFi movement towards the Cardano Ecosystem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
