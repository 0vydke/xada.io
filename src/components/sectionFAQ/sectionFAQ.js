
import React from 'react';
import './sectionFAQ.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const style = { 
    s1: {animationDelay: "0.3s", opacity: 1},
    s2: {animationDelay: "0.4s", opacity: 1},
    s3: {animationDelay: "0.5s", opacity: 1}
}
export default class SectionFAQ extends React.Component {
    render(){
    return (
        <section id="faq" className="faq section-padding">
            <div className="container">
                <div className="heading text-center">
                    <div className="animate__animated animate__fadeInUp" style={style.s1}>
                        <h6 className="sub-title">question</h6>
                        <h2 className="title">FAQ</h2>
                    </div>
                    <p className="content-desc animate__animated animate__fadeInUp" style={style.s2}>Originally the term "FAQ" referred to the Frequently Asked Question itself, and the
                        <br className="d-none d-xl-block"/>compilation of questions and answers was known as a "FAQ list" or some similar expression.</p>
                </div>
                <div class="row">
                    <div className="col">
                    <Tabs className="nav nav-pills nav-underline mb-5 animate__animated animate__fadeInUp" defaultActiveKey="general" id="uncontrolled-tab-example" style={style.s3}>
                        <Tab class="tab-pane fade show active" eventKey="general" title="General">
                            <Accordion className="collapse-icon accordion-icon-rotate">
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
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="3">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            What fees does XADA charge?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                    -
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="4">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            When and where will XADA conduct an IEO?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                    -
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Tab>
                        <Tab eventKey="ico" title="Pre-ICO">
                            <Accordion className="collapse-icon accordion-icon-rotate">
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="0">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Pityful a rethoric question ran over her cheek?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="1">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Which roasted parts of sentences fly into your mouth?
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="2">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #3
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Tab>
                        <Tab eventKey="tokens" title="Tokens">
                            <Accordion className="collapse-icon accordion-icon-rotate">
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="0">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #1
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="1">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #2
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="2">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #3
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Tab>
                        <Tab eventKey="client" title="Client">
                        <Accordion className="collapse-icon accordion-icon-rotate">
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="0">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #1
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="1">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #2
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="2">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Collapsible Group Item #3
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Tab>
                        <Tab eventKey="legal" title="Legal">
                        <Accordion className="collapse-icon accordion-icon-rotate">
                                <Card className="card animate__animated animate__fadeInUp">
                                    <Card.Header className="card-header">
                                    <Accordion.Toggle className="btn-link" as={Card.Header} variant="link" eventKey="0">
                                        <h5 className="mb-0">
                                            <span className="icon"></span>
                                            Legal Disclaimer
                                        </h5>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    This website is produced for educational and informational purposes only and is not intended to be used as promotion. No information, data, or analysis presented are intended to form the basis of any investment decision. Nothing on this website should be construed as an offer or inducement to engage in any form of investing activity. This website is not a prospectus, invitation, inducement, or proposal for investment, nor is it meant to be a sale or issuance of securities, interests, or assets. All of the information is provided in good faith.
                                    <br/><br/>
                                    XADA expressly disclaims any and all responsibility, and Recipients expressly waive all claim for any direct or indirect loss or damages of any kind (whether foreseeable or not) arising directly or indirectly from (i) reliance on any information contained in here or any information made available in connection with any further inquiries, (ii) any error, or inaccuracy, (iii) any action resulting therefrom or (iv) usage or acquisition of products.
                                    <br/><br/>
                                    This disclaimer applies notwithstanding any default, lack of care, or negligence. XADA reserves the right to amend, alter, or correct this website at any time without warning or incurring any duty or liability to any receiver. This contract does not express any rights, obligations, conditions, performance, covenants, promises, or warranties on behalf of XADA to the recipient, nor does it establish any relationship between XADA and any Recipient or other parties.
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
