
import React from 'react';
import './sectionTeam.scss';
import line from '../../assets/images/line.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
const team = require('./team.json');
library.add(fab)
const style = { 
    0: {animationDelay: "0.8s", opacity: 1},
    1: {animationDelay: "0.9s", opacity: 1},
    2: {animationDelay: "1s", opacity: 1},
    3: {animationDelay: "1.1s", opacity: 1},
    4: {animationDelay: "1.2s", opacity: 1},
    5: {animationDelay: "1.3s", opacity: 1},
    s6: {animationDelay: "0.3s", opacity: 1},
    s7: {animationDelay: "0.4s", opacity: 1},
    s8: {animationDelay: "0.5s", opacity: 1},
    s9: {animationDelay: "0.6s", opacity: 1},
    s10: {animationDelay: "0.7s", opacity: 1}
}
export default class SectionTeam extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
      };
  render(){
    return (
        <section id="team" className="team section-padding ">
            <div className="container">
                <div className="heading text-center">
                    <div className="animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.3s" style={style.s6}>
                        <div className="title-div">
                        <img src={line} alt="blue line" className="title-line"/>
                        <h2 className="title">Team</h2>
                        <img src={line} alt="blue line" className="title-line"/>
                        </div>
                    </div>
                    <p className="content-desc animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.4s" style={style.s7}>
                        We believe that by applying our team’s wealth of DeFi experience to XADA, we can create a 
                        <br className="d-none d-xl-block"/>new unicorn within the Cardano network that will stand the test of time.
                    </p>
                </div>

                <div className="team-profile mt-5">
                    <div className="row mb-5">
                        {team.people.map((person,index)=>{
                        return <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-5 animate__animated animate__jello" style={style[index]}>
                                    <div className="d-flex team-member">
                                        <div className="team-img float-left mr-3" onClick={()=> window.open(person.link, "_blank")} >
                                            <img key={index} src={require(`../../assets/images/user-${person.img}.png`).default} alt="team-profile-1" className="rounded-circle" width="128"/>
                                        </div>
                                        <div className="profile align-self-center">
                                            <div className="name">{person.name}</div>
                                            <div className="role">{person.role}</div>
                                            <div className="social-profile mt-3">
                                                <a href={person.link} rel="noreferrer" target="_blank" title="Linkedin" className="font-medium grey-accent2 mr-2"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
