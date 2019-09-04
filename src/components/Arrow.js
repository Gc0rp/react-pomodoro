import React from 'react';

const ArrowStyle = {
    height: "16px",
    width: "16px",
    padding: "10px"
};

const Arrow = (props) => (
    <button className="btn" type="button">
        <img src={props.source} alt={props.alt} style={ArrowStyle}/>
    </button>

);

Arrow.defaultProps= {
    source: "",
    alt: ""
};

export default Arrow;