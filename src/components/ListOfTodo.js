import React from 'react';
import BoxStyle from '../constants/css/BoxStyle';

class ListOfTodo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={BoxStyle}>
                <div style={{display: "flex"}}>
                <h1>To-do List</h1>
                <h1>To-do List</h1>
                <h1>To-do List</h1>
                </div>
                
            </div>
        );
    }
}

export default ListOfTodo;