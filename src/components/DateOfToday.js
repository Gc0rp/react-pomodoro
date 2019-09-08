import React from 'react';
import todoStyle from '../constants/css/TodoStyle';

const date = new Date();

const DateOfToday = () => (
    <h1 style={todoStyle}>
        {(date.getDay() + 1).toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString()}
    </h1>
);

export default DateOfToday;