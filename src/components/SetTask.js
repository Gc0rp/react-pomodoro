import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import MainHeading from '../constants/css/Heading';
import InputTask from './InputTask';
import SubHeading from '../constants/css/SubHeading';
import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';
import AddButton from './Add';

class SetTask extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <div className="col-lg-12">
                    <MainHeading>Pomodoro.</MainHeading>
                </div>
                <div className="col-lg-12">
                    <InputTask />
                </div>

                <div className="col-lg-12" style={{display: "flex"}}>
                    <div className="col-lg-6 setTaskLabel">
                        <SubHeading id="session-label">Session Length</SubHeading>
                    </div>
                    <div className="col-lg-6 setTaskLabel" style={{padding: "12px", display: "flex"}}>
                        <ArrowUp id="session-increment" buttonType="session"/>
                        <h3 id="session-length">{this.props.sessionMin}:00</h3>
                        <ArrowDown id="session-decrement" buttonType="session"/>
                    </div>
                </div>

                <div className="col-lg-12" style={{display: "flex"}}>
                    <div className="col-lg-6 setTaskLabel">
                        <SubHeading id="break-label">Break Length</SubHeading>
                    </div>
                    <div className="col-lg-6 setTaskLabel" style={{padding: "12px", display: "flex"}}>
                        <ArrowUp id="break-increment"/>
                        <h3 id="break-length">{this.props.breakMin}:00</h3>
                        <ArrowDown id="break-decrement"/>
                    </div>
                </div>

                <div className="col-lg-12" style={{textAlign: "right"}}>
                    <AddButton />
                </div>
            </Fragment>
        );
    }   
};

const mapStateToProps = (state) => {
    return {
        sessionMin: state.taskTimeMin,
        breakMin: state.breakTimeMin
    };
};

export default connect(mapStateToProps,null)(SetTask);