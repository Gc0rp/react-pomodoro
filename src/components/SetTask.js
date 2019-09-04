import React, {Fragment} from 'react';
import MainHeading from '../constants/css/Heading';
import InputTask from '../constants/css/InputTask';
import SubHeading from '../constants/css/SubHeading';
import ArrowUp from '../images/ArrowUp.png';
import Arrow from './Arrow';

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
                    <InputTask placeholder="Add a new task...!"></InputTask>
                </div>

                <div className="col-lg-12" style={{display: "flex"}}>
                    <div className="col-lg-6">
                        <SubHeading>Session Length</SubHeading>
                    </div>
                    <div className="col-lg-6">
                        <Arrow source={ArrowUp} alt="Arrow Up"></Arrow>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SetTask;