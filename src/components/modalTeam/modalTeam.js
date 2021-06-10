import React from 'react';

export default class ModalTeam extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
      };
      render(){
        return (
            <div class="modal team-modal fade" id="teamUser13" tabindex="-1" role="dialog" aria-labelledby="teamUser13Title" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-body">
                            <div class="row p-4">
                                <div class="col-12 col-md-5">
                                    <img class="img-fluid rounded" src="theme-assets/images/user-13-lg.jpg" alt="Terry T. Robinette"/>
                                </div>
                                <div class="col-12 col-md-7 mt-sm-3">
                                    <h5 id="teamUser13Title">Terry T. Robinette</h5>
                                    <small class="text-muted mb-0 ">Developer</small>
                                    <div class="social-profile">
                                        <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                        <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                        <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                                    </div>
                                    <div class="my-4">
                                        <p>Experienced algorithmic crypto trader and a machine learning evangelist.</p>
                                        <p>I’m focusing on the logic behind the combination of analysis tools, neural networks and genetic algorithms for optimization. Always wanted to have a trading bot with more features but never had the time to build a solution beyond basic python technical analysis tracker.</p>
                                    </div>
                                    <h6 class="mb-0"><small class="text-uppercase">Blockchain</small> <small class="float-right">85%</small></h6>
                                    <div class="progress box-shadow-1 mb-4">
                                        <div class="progress-bar progress-orange" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h6 class="mb-0"><small class="text-uppercase">Python</small> <small class="float-right">90%</small></h6>
                                    <div class="progress box-shadow-1 mb-4">
                                        <div class="progress-bar progress-orange" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h6 class="mb-0"><small class="text-uppercase">C++</small> <small class="float-right">75%</small></h6>
                                    <div class="progress box-shadow-1 mb-4">
                                        <div class="progress-bar progress-orange" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}