import React from 'react';
import SetTask from './SetTask';
import CurrentTask from './CurrentTask';

class BoxOne extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="col-lg-12">
                    <SetTask />
                </div>
                
                <div className="col-lg-12" style={{"padding-left": "35px"}}>
                    <CurrentTask />
                </div>
                
            </div>
                
        );
    }
}

export default BoxOne;