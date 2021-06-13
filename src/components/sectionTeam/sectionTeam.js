
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
console.log(team.people[0].name);
export default class SectionTeam extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
      };

  render(){
    return (
        <section id="team" class="team section-padding ">
            <div class="container">
                <div class="heading text-center">
                    <div class="animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.3s" style={style.s6}>
                        <div className="title-div">
                        <img src={line} className="title-line"/>
                        <h2 class="title">Team</h2>
                        <img src={line} className="title-line"/>
                        </div>
                    </div>
                    <p class="content-desc animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.4s" style={style.s7}>
                        We believe that by applying our team’s wealth of DeFi experience to XADA, we can create a 
                        <br class="d-none d-xl-block"/>new unicorn within the Cardano network that will stand the test of time.
                    </p>
                </div>
                <div class="row team-intro justify-content-center text-center">
                    <div class="col-12 col-md-4 col-lg-2 team-width animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.5s" style={style.s8}>
                        <span>18</span>
                        <p>Creative and
                            <br/>Dedicated People</p>
                    </div>
                    <div class="col-12 col-md-4 col-lg-2 team-width animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.6s" style={style.s9}>
                        <span>125</span>
                        <p>Years of combined experience</p>
                    </div>
                    <div class="col-12 col-md-4 col-lg-2 team-width animate__animated animate__fadeInUp" data-animation="fadeInUpShorter" data-animation-delay="0.7s" style={style.s10}>
                        <span>10</span>
                        <p>Years of blockchain experience</p>
                    </div>
                </div>
                <div class="team-profile mt-5">
                    <div class="row mb-5">
                    {team.people.map((person,index)=>{
                    return <div key={index} class="col-sm-12 col-md-6 col-lg-4 mb-5 animate__animated animate__jello" style={style[index]}>
                                <div class="d-flex team-member">
                                    <div class="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img key={index} src={require(`../../assets/images/user-${person.img}.png`).default} alt="team-profile-1" class="rounded-circle" width="128"/>
                                    </div>
                                    <div class="profile align-self-center">
                                        <div class="name">{person.name}</div>
                                        <div class="role">{person.role}</div>
                                        <div class="social-profile mt-3">
                                            <a href={person.link} target="_blank" title="Linkedin" class="font-medium grey-accent2 mr-2"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                            <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                            <a href="#" title="Github" class="font-medium grey-accent2"><FontAwesomeIcon icon={['fab', 'github']} /></a>
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
