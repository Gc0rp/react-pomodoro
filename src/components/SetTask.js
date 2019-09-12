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
                        <SubHeading>Session Length</SubHeading>
                    </div>
                    <div className="col-lg-6 setTaskLabel" style={{padding: "12px", display: "flex"}}>
                        <ArrowUp buttonType="session"/>
                        <h3>{this.props.sessionMin}:00</h3>
                        <ArrowDown />
                    </div>
                </div>

                <div className="col-lg-12" style={{display: "flex"}}>
                    <div className="col-lg-6 setTaskLabel">
                        <SubHeading>Break Length</SubHeading>
                    </div>
                    <div className="col-lg-6 setTaskLabel" style={{padding: "12px", display: "flex"}}>
                        <ArrowUp />
                        <h3>{this.props.breakMin}:00</h3>
                        <ArrowDown />
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