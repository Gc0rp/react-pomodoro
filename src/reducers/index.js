import { combineReducers } from 'redux';
import { Task } from '../classes/Task';
import EnterTask from '../actions/EnterTask';

const defaultState = {
    currentTask: '',
    breakTimeMin: 5,
    taskTimeMin: 25,
    d: []
};

const handleTasksReducer = (state = defaultState, action) => {
    switch(action.type) {

    case 'ENTER_TASK':
        let updatedVersion = action.task; 
        return  {...state, currentTask: updatedVersion};   

    case 'ADD_NEW_TASK':
        const newTask = new Task(action.name, action.time, action.break);
        let newState = {...state};
        newState.d.push(newTask);
        return newState;
    case 'INCREASE_SESSION_TIME':
        return {...state, taskTimeMin: state.taskTimeMin + 1};
    case 'INCREASE_BREAK_TIME':
        return {...state, breakTimeMin: state.breakTimeMin + 1};

    default:
        return defaultState;

    }
};

const rootReducer = handleTasksReducer;

export default rootReducer;
