import React from 'react';
import BoxStyle from '../constants/css/BoxStyle';
import DateOfToday from './DateOfToday';
import todoStyle from '../constants/css/TodoStyle';

class ListOfTodo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={BoxStyle}>
                <div className="row" style={{padding: "27px"}}>
                    <div className="col-lg-6 list-of-todo-label">
                        <DateOfToday />
                    </div>
                    <div className="col-lg-6 list-of-todo-label" style={{textAlign: "right"}}>
                        <h5 style={todoStyle}>To-Do</h5>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ListOfTodo;