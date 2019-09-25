import React from 'react';
import styled from 'styled-components';


const Timer = styled.h3`
font-family: 'Cantarell', sans-serif;
color: #FF8552;
font-size: 20px;
font-weight: 800;
padding-top: 20px;
`;


class TaskTimer extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            minutes: this.props.taskTime,
            seconds: 0,
            pause: false
        };

        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);

        var timer;
    }

    startTime(){
        if(!this.state.pause) {
            this.timer = setInterval( () => {
                if(this.state.seconds > 0) {
                    this.setState({
                        seconds: this.state.seconds - 1
                    });
                } else if (this.state.minutes > 0) {
                    this.setState({
                        seconds: 59,
                        minutes: this.state.minutes - 1
                    });
                } else {
                    this.stopTime();
                }
            }, 1000);
        }
    }

    stopTime(){
        this.setState({
            pause: true
        });
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <Timer>{this.state.minutes} : {this.state.seconds}</Timer>
                <button type="button" onClick={this.startTime}>Start</button> 
                <button type="button" onClick={this.stopTime}>Stop</button> 
            </div> 
        );
    };
};

export default TaskTimer;