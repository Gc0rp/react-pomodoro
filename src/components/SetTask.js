import React, {Fragment} from 'react';
import MainHeading from '../constants/css/Heading';
import InputTask from '../constants/css/InputTask';
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
            </Fragment>
        );
    }
}

export default SetTask;