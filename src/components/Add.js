import React from 'react'; 
import {connect} from 'react-redux';

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
        console.log(this.props.ct);
    }

    render(){
        return(
            <button className="btn" type="button" style={AddStyles} onClick={this.handleClick}>Add</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ct: state.currentTask,
    };
};

export default connect(mapStateToProps)(Add);