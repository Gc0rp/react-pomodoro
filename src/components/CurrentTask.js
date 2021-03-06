import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TaskTimer from './TaskTimer';
import BoxStyle from '../constants/css/BoxStyle';

const DisplayTask = styled.h1`
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
`;

const TaskTime = styled.h3`
    font-size: 14px;
    color: #FF8552;
`;

class CurrentTask extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const t = this.props.firstTask;  
        

        
        console.log(t);

            if (t != undefined) {
                if(this.props.firstTask.type === "Break" && this.props.firstTask.breakTime < 10) {
                    t.breakTime = '0' + String(t.breakTime); 
                } else if (this.props.firstTask.type === "Task" && this.props.firstTask.taskTime < 10) {
                    console.log("in Task");
                    t.taskTime = '0' + String(t.taskTime);
                }
                return(
                <div className="col-lg-12" id="current-task">
                    <DisplayTask id="timer-label">{t.title}</DisplayTask> 
                    <TaskTimer taskTime={ (t.type === "Break" ? t.breakTime : t.taskTime)} type={t.type} />
                 </div>
                );
            } 
                
            return (
                <div className="col-md-6" id="current-task">
                    <p>No Tasks entered</p>
                </div>
            );
    };
};

const mapStateToProps = (state) => {
    return {
        firstTask : state.todos[0]
    };
};
export default connect(mapStateToProps, null)(CurrentTask);