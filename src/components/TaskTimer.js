import React, {Fragment} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TaskCompleted from '../actions/TaskCompleted';
import Reset from '../actions/Reset';

import PauseButton from '../images/PauseButton.png';
import PlayButton from '../images/PlayButton.png';
import ResetButtonImage from '../images/reset.png';
import cymbals from '../sounds/cymbals.wav';

const Timer = styled.h3`
font-family: 'Cantarell', sans-serif;
color: #FF8552;
font-size: 20px;
font-weight: 800;
padding-top: 20px;
min-width: 80px;
`;

const ResetLabel = styled.h3`
font-family: 'Cantarell', sans-serif;
color: #FF8552;
font-size: 20px;
font-weight: 800;
min-width: 80px;
`;

class TaskTimer extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            minutes: this.props.taskTime,
            seconds: '00',
            pause: false,
            pausePlayButton: PauseButton
        };

        this.startTime = this.startTime.bind(this);
        this.handleTimer = this.handleTimer.bind(this);
        this.stopTime = this.stopTime.bind(this);
        this.resetTaskTime = this.resetTaskTime.bind(this);

        var timer;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            minutes: nextProps.taskTime,
            seconds: '00',
            pausePlayButton: PauseButton 
        });
        this.stopTime();
    }

    startTime(){
        this.timer = setInterval( () => {
            if(this.state.seconds > 0) {
                if(this.state.seconds <= 10){
                    this.setState({
                        seconds: '0' + String(this.state.seconds - 1)
                    });
                } else {
                    this.setState({
                        seconds: this.state.seconds - 1
                    });
                }
            } else if (this.state.minutes > 0) {
                if(this.state.minutes <= 10) {
                    this.setState({
                        seconds: 59,
                        minutes: '0' + String(this.state.minutes - 1)
                    });
                } else {
                    this.setState({
                        seconds: 59,
                        minutes: this.state.minutes - 1
                    });
                }
                
            } else {
                this.stopTime();
                this.props.taskCompleted();

                if(this.props.type === "Break") {
                    this.setState({
                        minutes: this.props.taskTime,
                        seconds: '00',
                        pause: false,
                        pausePlayButton: PauseButton
                    });
                }
            }
        }, 1000);
    }

    resetTaskTime(){
        this.setState({
            minutes: this.props.taskTime,
            seconds: 0
        });

        this.props.reset();
        this.stopTime();
    }

    handleTimer(){
        if(this.state.pause === false) {
            this.setState({
                pausePlayButton: PlayButton,
                pause: true
            });
            this.startTime();
        } else {
            this.setState({
                pausePlayButton: PauseButton
            });
            this.stopTime();
        }
    }

    stopTime(){
        this.setState({
            pause: false
        });
        clearInterval(this.timer);
    }

    render(){
        return(
            <Fragment>
                <div style={{display: "flex"}}>
                    <div>
                        <Timer id="time-left">{this.state.minutes}:{this.state.seconds}</Timer>
                    </div> 
                    <div>
                        <button type="button" className="btn" id="start_stop" onClick={this.handleTimer} style={{marginLeft: "90px"}}>
                            <img src={this.state.pausePlayButton} style={{width: "100px", height: "100px"}} alt="Pause / Play button"/>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12" id="task-reset">
                        <ResetLabel id="reset-label">Restart</ResetLabel>
                        <button type="button" className="btn" onClick={this.resetTaskTime} id="reset">
                            <img src={ResetButtonImage} style={{width: "25px", height: "20px"}} alt="Reset button"/>
                        </button>
                        <audio src={cymbals}></audio>
                    </div>
                </div>
            </Fragment>
            
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskCompleted: (item) => {
            dispatch(TaskCompleted(item));
        },
        reset: () => {
            dispatch(Reset());
        }
    };
};

export default connect(null, mapDispatchToProps)(TaskTimer);