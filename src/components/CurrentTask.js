import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import BoxStyle from '../constants/css/BoxStyle';

const DisplayTask = styled.h1`
    font-size: 20px;

`;

class CurrentTask extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="col-lg-12">
                <DisplayTask>Test</DisplayTask>
                <h1>{this.props.firstTask}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstTask : state.todos[0]
    };
};
export default connect(mapStateToProps, null)(CurrentTask);