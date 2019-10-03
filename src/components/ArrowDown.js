import React from 'react';
import {connect} from 'react-redux';
import ArrowDownImage from '../images/ArrowDown.png';
import DecreaseBreakTime from '../actions/DecreaseBreakTime';
import DecreaseTaskTime from '../actions/DecreaseTaskTime';

class ArrowDown extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.props.buttonType === "session") {
            this.props.decreaseTaskTime();
        } else {
            this.props.decreaseBreakTime();
        }
        
    }

    render(){
        return(
            <button className="btn" type="button" onClick={this.handleClick} id={this.props.id}>
                <img style={{height: "20px", width: "20px", marginBottom: "8px"}} src={ArrowDownImage} alt="Arrow Down" />
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseBreakTime: () => {
            dispatch(DecreaseBreakTime());
        },
        decreaseTaskTime: () => {
            dispatch(DecreaseTaskTime());
        }
    };
};

export default connect(null, mapDispatchToProps)(ArrowDown);