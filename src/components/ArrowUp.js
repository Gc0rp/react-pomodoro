import React from 'react';
import ArrowUpImage from '../images/ArrowUp.png';

const ArrowUp = () => (
    <button className="btn" type="button">
        <img style={{height: "20px", width: "20px", marginBottom: "8px"}} src={ArrowUpImage} alt="Arrow up" />
    </button>
);

export default ArrowUp;