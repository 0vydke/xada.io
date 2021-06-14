import React from 'react';
import './sectionRoadmap.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from 'swiper/core';
import line from '../../assets/images/line.jpg';
SwiperCore.use([Navigation]);
const style = { 
    s1: {animationDelay: "0.3s", opacity: 1},
    s2: {animationDelay: "0.4s", opacity: 1},
    s3: {animationDelay: "0.6s", opacity: 1},
    s4: {transitionDuration: "0ms", transform: "translate3d(-199.8px, 0px, 0px);: '0.4s'", opacity: 1}
}
export default class SectionSolutions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render(){
    return (
        <section id="roadmap" className="roadmap section-padding">
            <div className="container">
                <div className="heading text-center">
                    <div className="animate__animated animate__fadeInUp" style={style.s1}>
                        <div className="title-div">
                        <img src={line} alt="blue line" className="title-line"/>
                        <h2 className="title">Roadmap</h2>
                        <img src={line} alt="blue line" className="title-line"/>
                        </div>
                    </div>
                    <p className="content-desc animate__animated animate__fadeInUp" style={style.s2}>
                        <br className="d-none d-xl-block"/>
                        <br className="d-none d-xl-block"/>
                    </p>
                </div>
                <div className="row animate__animated animate__fadeInUp" style={style.s3}>
                    <div className="col-12">
                        <div className="roadmap-container">
                        <Swiper
                        breakpoints={{
                            991: {
                            width: 991,
                            slidesPerView: 2.5,
                            },
                            775: {
                            width: 770,
                            slidesPerView: 2.5,
                            },
                            1200: {
                            width: 1200,
                            slidesPerView: 5,
                            },
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={true}
                        className="swiper-container swiper-container-horizontal swiper-container-android">
                        <div className="swiper-wrapper timeline" style={style.s4}>
                        <SwiperSlide className="active">
                            <div className="roadmap-info">
                                <div className="timestamp completed active">
                                    <span className="date">2021 June</span>
                                </div>
                                <div className="status completed">
                                    <span>June XADA <br/>Private sale</span>
                                    <span className="live"><a href="mailto:contact@otc@xada.io">Live Now</a></span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="roadmap-info">
                                <div className="timestamp">
                                    <span className="date">2021 July</span>
                                </div>
                                <div className="status">
                                    <span>July XADA <br/>Public sale</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="roadmap-info">
                                <div className="timestamp remaining">
                                    <span className="date">2021 Q3</span>
                                </div>
                                <div className="status remaining">
                                    <span>Cardano launches <br/> smart contracts</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="roadmap-info">
                                <div className="timestamp remaining">
                                    <span className="date">2021 Q3</span>
                                </div>
                                <div className="status remaining">
                                    <span>XADA Swap <br/> launch</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="roadmap-info">
                                <div className="timestamp remaining">
                                    <span className="date">2022 Q1</span>
                                </div>
                                <div className="status remaining">
                                    <span>ERC20 bridge <br/>integration </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                                <div className="roadmap-info">
                                    <div className="timestamp remaining">
                                        <span className="date">2022 Q3</span>
                                    </div>
                                    <div className="status remaining">
                                        <span>XADA <br/>Open source</span>
                                    </div>
                                </div>
                        </SwiperSlide>
                                </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
