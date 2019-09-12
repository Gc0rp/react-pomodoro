import React from 'react';
import {connect} from 'react-redux';
import ArrowUpImage from '../images/ArrowUp.png';
import IncreaseSessionTime from '../actions/IncreaseSessionTime';
import IncreaseBreakTime from '../actions/IncreaseBreakTime';

class ArrowUp extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.buttonType === "session"){
            this.props.increaseSession();
        } else{
            this.props.increaseBreak();
        }
    }

    render(){
        return(
            <button className="btn" type="button" onClick={this.handleClick}>
                <img style={{height: "20px", width: "20px", marginBottom: "8px"}} src={ArrowUpImage} alt="Arrow up" />
            </button>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseSession: () => {
            dispatch(IncreaseSessionTime());
        },
        increaseBreak: () => {
            dispatch(IncreaseBreakTime());
        }
    };
};

export default connect(null,mapDispatchToProps)(ArrowUp);