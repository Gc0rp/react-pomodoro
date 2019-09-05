import React from 'react';
import ArrowDownImage from '../images/ArrowDown.png';

const ArrowDown = () => (
    <button className="btn" type="button">
        <img style={{height: "20px", width: "20px", marginBottom: "8px"}} src={ArrowDownImage} alt="Arrow Down" />
    </button>
);

export default ArrowDown;