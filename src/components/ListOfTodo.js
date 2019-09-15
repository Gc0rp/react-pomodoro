import React from 'react';
import {connect} from 'react-redux';
import BoxStyle from '../constants/css/BoxStyle';
import DateOfToday from './DateOfToday';
import todoStyle from '../constants/css/TodoStyle';

const mapStateToProps = (state) => {
    return {
        todosList: state.todos 
    };
};

const ListOfTodo = (props) =>{
    return (
        <div style={BoxStyle}>
            <div className="row" style={{padding: "27px"}}>
                <div className="col-lg-6 list-of-todo-label">
                    <DateOfToday />
                </div>
                <div className="col-lg-6 list-of-todo-label" style={{textAlign: "right"}}>
                    <h5 style={todoStyle}>To-Do</h5>
                    <ul>
                        {props.todosList[0]}
                    </ul>
                </div>
            </div>
                
        </div>
    );
};

export default connect(mapStateToProps, null)(ListOfTodo);