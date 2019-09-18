import React from 'react';
import {connect} from 'react-redux';
import BoxStyle from '../constants/css/BoxStyle';
import DateOfToday from './DateOfToday';
import {Task} from '../classes/Task';
import todoStyle from '../constants/css/TodoStyle';

class ListOfTodo extends React.Component{

    super(props){
        constructor(props);

        this.deleteTodo = this.deleteTodo.bind(this);

    }

    deleteTodo(todoItem){
        const newList = this.props.todosList.filter( (i) => {
            return JSON.stringify(i) !== JSON.stringify(todoItem);
        });
        console.log(newList);
        
    }

    render(){

        const renderedElements = this.props.todosList.map( (i) => {
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <li key={i.title} className="todoItem">{i.title}</li>
                    </div>
                    <div className="col-lg-6" id="col-button">
                        <button type="button" className="btn delete-button" onClick={() => this.deleteTodo(new Task(i.title, i.taskTime, i.breakTime))}>X</button>
                    </div>
                </div>
                
            );
        });
    
        return(
            
            <div style={BoxStyle}>
                <div className="row" style={{padding: "27px"}}>
                    <div className="col-lg-6 list-of-todo-label">
                        <DateOfToday />
                    </div>
                    <div className="col-lg-6 list-of-todo-label" style={{textAlign: "right"}}>
                        <h5 style={todoStyle}>To-Do</h5>
                    </div>
                </div>
        
                <div className="row" style={{paddingLeft: "27px"}}>
                    <div className="col-lg-12 list-of-todos">
                        <ul className="display-todos">
                            {renderedElements}
                        </ul>
                    </div>
                </div>      
            </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todosList: state.todos 
    };
};
    
export default connect(mapStateToProps, null)(ListOfTodo);