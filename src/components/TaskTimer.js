import React from 'react';

class TaskTimer extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            time: this.props.taskTime,
            seconds: 60
        };

        this.decreaseSeconds = this.decreaseSeconds.bind(this);
    }

    componentDidMount(){
        setInterval(this.decreaseSeconds, 1000);
        
    }

    decreaseSeconds(){
        console.log("function called");
        this.setState = {
            seconds: this.state.seconds - 1
        };

        console.log("Seconds is now: " + this.state.seconds);
    }

    render(){
        return(
            <p>{this.state.seconds}</p>

        );
    };
};

export default TaskTimer;