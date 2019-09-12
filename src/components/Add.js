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
        this.props.AddNewTask(this.props.currentInput, this.props.taskTime, this.props.breakTime);
    }

    render(){
        return(
            <button className="btn" type="button" style={AddStyles} onClick={this.handleClick}>Add</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentInput: state.currentTask,
        taskTime: state.taskTimeMin,
        breakTime: state.breakTimeMin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewTask: (task, taskTime, breakTime) => {
            dispatch(AddNewTask(task, taskTime, breakTime));
        }
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);