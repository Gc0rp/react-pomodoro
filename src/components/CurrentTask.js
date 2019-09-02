import React from 'react';
import BoxStyle from '../constants/css/BoxStyle';

class CurrentTask extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="col-lg-12">
                <h1>Current Task</h1>
            </div>
        );
    }
}

export default CurrentTask;