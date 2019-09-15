import { combineReducers } from 'redux';
import { Task } from '../classes/Task';

const defaultState = {
    currentTask: '',
    breakTimeMin: 5,
    taskTimeMin: 25,
    todos: []
};

const handleTasksReducer = (state = defaultState, action) => {
    switch(action.type) {

    case 'ENTER_TASK':
        let updatedVersion = action.task; 
        return  {...state, currentTask: updatedVersion};   

    case 'ADD_NEW_TASK':
        const newTask = new Task(action.name, action.time, action.break);
        let newState = {...state};
        newState.todos.push(newTask);
        return newState;
    case 'INCREASE_SESSION_TIME':
        return {...state, taskTimeMin: state.taskTimeMin + 1};
    case 'INCREASE_BREAK_TIME':
        return {...state, breakTimeMin: state.breakTimeMin + 1};
    case 'DECREASE_BREAK_TIME':
        if(state.breakTimeMin > 0) {
            return {...state, breakTimeMin: state.breakTimeMin - 1};
        }
        return state;
    case 'DECREASE_TASK_TIME':
        if(state.taskTimeMin > 0) {
            return {...state, taskTimeMin: state.taskTimeMin - 1};
        }
        return state;

    default:
        return defaultState;

    }
};

const rootReducer = handleTasksReducer;

export default rootReducer;
