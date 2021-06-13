import React from 'react';
import './sectionFAQ.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import line from '../../assets/images/line.jpg'

const style = { 
    s1: {animationDelay: "0.3s", opacity: 1},
    s2: {animationDelay: "0.4s", opacity: 1},
    s3: {animationDelay: "0.5s", opacity: 1},
    s4: {display: "flex", justifyContent: 'center'}
}
export default class SectionFAQ extends React.Component {
    render(){
    return (
        <section id="faq" className="faq section-padding">
            <div className="container">
                <div className="heading text-center">
                    <div className="animate__animated animate__fadeInUp" style={style.s1}>
                        <div style={style.s4}>
                        <img src={line} className="title-line"/>
                        <h2 className="title">FAQ</h2>
                        <img src={line} className="title-line"/>
                        </div>
                    </div>
                    <p className="content-desc animate__animated animate__fadeInUp" style={style.s2}>
                    The ICO usually takes place before the project is completed, and helps fund the expenses<br className="d-none d-xl-block"/>
undertaken by the founding team until launch. For some of the larger projects.
                    </p>
                </div>
                <div class="row">
                    <div className="col">
                    <Tabs className="nav nav-pills nav-underline mb-5 animate__animated animate__fadeInUp" defaultActiveKey="general" id="uncontrolled-tab-example" style={style.s3}>
                        <Tab class="tab-pane fade show active" eventKey="general" title="General">
                            <Accordion className="collapse-icon accordion-icon-rotate animate__animated animate__fadeInUp" style={style.s3}>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="0">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            What is the Cardano ERC20 converter?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    Cardano will soon roll out its ERC20 converter that gives its native tokens full interoperability and allows everyone to make an easy switch to Cardano. With just a few clicks, the ERC20 converter tool will enable both token issuers and holders to move their ERC20 tokens to the Cardano network. That means that organizations and their users will be able to ‘translate’ their ERC20 tokens into special native tokens of the same value on the Cardano ecosystem.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="1">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            What are the differences between Automated Liquidity Protocol and DEX?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Some of our competitors use order book-based decentralized exchange contracts with an off-chain matching and on-chain settlement approach. Nevertheless this tends to lead to low transaction volume, very limited liquidity, and overall poor user experience.
                                    <br/><br/>
                                    Luckily, there’s an alternative. Automated Market Makers (AMMs), such as Uniswap or XADA, avoid the pitfalls of centralization while still being extremely fast, cheap and liquid. Our smart contract-based non-custodial DEX platform is a much-anticipated DeFi innovation — one that is indicative of fresh thinking that our industry is in desperate need of.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="2">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Why are all tokens ERC20?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    Released in 2015, ERC20 has become the standard token type within the world of programmable money. Although it has mostly been driven by the virtuous cycle of high early adoption leading to even higher popularity, tokenization in the ERC20 has exploded because of the enormous flexibility and utility it provides for crypto businesses and their users. According to some calculations, there are over 400,000 different contracts based on the ERC20 token standard in existence today. ERC20 tokens are supported by almost every crypto wallet and exchange in existence.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
