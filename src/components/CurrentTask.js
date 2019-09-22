import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
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
        const t = this.props.firstTask.map( (i) => {
            return(
                <DisplayTask>{i.title}</DisplayTask>
                <TaskTime>{i.taskTime}</TaskTime>
            );
        });
        return(
            <div className="col-md-6 current-task" style={{"border" : "1px solid red"}}>
                {t[0]}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstTask : state.todos
    };
};
export default connect(mapStateToProps, null)(CurrentTask);