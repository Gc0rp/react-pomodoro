import React from 'react'; 

const AddStyles = { 
    width: "100px",
    height: "40px",
    backgroundColor: "#FF8552",
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: "bold"
};

const Add = () => (
    <button className="btn" type="button" style={AddStyles}>
        Add
    </button>
);

export default Add;
