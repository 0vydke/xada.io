
import React from 'react';
import './sectionRoadmap.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from 'swiper/core';
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
        <section id="roadmap" class="roadmap section-padding">
            <div class="container">
                <div class="heading text-center">
                    <div class="animate__animated animate__fadeInUp" style={style.s1}>
                        <h6 class="sub-title">Implementation</h6>
                        <h2 class="title">Roadmap</h2>
                    </div>
                    <p class="content-desc animate__animated animate__fadeInUp" style={style.s2}>We have developed an ambitious roadmap and we promise to our community 
                        <br class="d-none d-xl-block"/>that we will not rest until we cross off every item on that list.</p>
                </div>
                <div class="row animate__animated animate__fadeInUp" style={style.s3}>
                    <div class="col-12">
                        <div class="roadmap-container">
                        <Swiper
                        spaceBetween={0}
                        slidesPerView={5}
                        navigation={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="swiper-container swiper-container-horizontal swiper-container-android">
                        <div class="swiper-wrapper timeline" style={style.s4}>
                        <SwiperSlide>
                            <div class="roadmap-info">
                                <div class="timestamp completed">
                                    <span class="date">2021 Q3</span>
                                </div>
                                <div class="status completed">
                                    <span>Cardano launches <br/>smart contracts</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="active">
                            <div class="roadmap-info">
                                <div class="timestamp active">
                                    <span class="date">2021 Q3</span>
                                </div>
                                <div class="status active">
                                    <span>XADA Liquidity launch</span>
                                    <span class="live">Live Now</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="roadmap-info">
                                <div class="timestamp remaining">
                                    <span class="date">2021 Q3</span>
                                </div>
                                <div class="status remaining">
                                    <span>XADA Swapping launch</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="roadmap-info">
                                <div class="timestamp remaining">
                                    <span class="date">2022 Q1</span>
                                </div>
                                <div class="status remaining">
                                    <span>Integration with IOHK <br/>ERC20 bridge </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                                <div class="roadmap-info">
                                    <div class="timestamp remaining">
                                        <span class="date">2022 Q3</span>
                                    </div>
                                    <div class="status remaining">
                                        <span>XADA White-label <br/>solution launch</span>
                                    </div>
                                </div>
                        </SwiperSlide>
                                </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
