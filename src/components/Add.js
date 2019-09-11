import React from 'react'; 
import {connect} from 'react-redux';
import AddNewTask from '../actions/AddNewTask';

const AddStyles = { 
    width: "100px",
    height: "40px",
    backgroundColor: "#FF8552",
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: "bold"
};

class Add extends React.Component{
    constructor(props){
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this.props.currentInput);
        this.props.AddNewTask(this.props.currentInput, '30');
    }

    render(){
        return(
            <button className="btn" type="button" style={AddStyles} onClick={this.handleClick}>Add</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentInput: state.currentTask
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewTask: (task, taskTime) => {
            dispatch(AddNewTask(task, taskTime));
        }
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);