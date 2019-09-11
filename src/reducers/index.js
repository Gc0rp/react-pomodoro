import { combineReducers } from 'redux';
import { Task } from '../classes/Task';
import EnterTask from '../actions/EnterTask';

const defaultState = {
    currentTask: '',
    breakTimeMin: '',
    breakTimeSec: '',
    taskTimeMin: '',
    taskTimeSec: '',
    d: []
};

const handleTasksReducer = (state = defaultState, action) => {
    switch(action.type) {

    case 'ENTER_TASK':
        let updatedVersion = action.task; 
        return  {...state, currentTask: updatedVersion};   

    case 'ADD_NEW_TASK':
        const newTask = new Task(action.name, action.time);
        let newState = {...state};
        newState.d.push(newTask);
        return newState;
        
    default:
        return defaultState;

    }
};

const rootReducer = handleTasksReducer;

export default rootReducer;
