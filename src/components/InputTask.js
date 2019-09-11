import React from 'react';
import {connect} from 'react-redux';
import EnterTask from '../actions/EnterTask';

const InputBoxStyle = {
    fontFamily: "'Cantarell', sans-serif",
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "700",
    padding: "5px",
    backgroundColor: "#FF8552",
    border: "none",
    borderRadius: "5px",
    marginTop: "20px",
    textAlign: "center"
};

class InputTask extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }   

    handleChange(event){
        this.props.updateTask(event.target.value);
    }

    render(){
        return(
            <input style={InputBoxStyle} placeholder="Add a new Task...!" onChange={this.handleChange} maxLength="50"/> 
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (task) => {
            dispatch(EnterTask(task));
        }
    }; 
};

export default connect(null, mapDispatchToProps)(InputTask);