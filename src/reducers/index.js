import { Task } from '../classes/Task';

const defaultTaskState = {
    currentTask: '',
    breakTimeMin: 5,
    taskTimeMin: 25,
    todos: []
};

const handleTasks = (state = defaultTaskState, action) => {
    switch(action.type) {

    case 'ENTER_TASK':
        let updatedVersion = action.task; 
        return  {...state, currentTask: updatedVersion};   
    case 'INCREASE_SESSION_TIME':
        if(state.taskTimeMin < 60){
            return {...state, taskTimeMin: state.taskTimeMin + 1};
        }
        return state;
        
    case 'INCREASE_BREAK_TIME':
        if(state.breakTimeMin < 60) {
            return {...state, breakTimeMin: state.breakTimeMin + 1};
        }
        return state;
        
    case 'DECREASE_BREAK_TIME':
        if(state.breakTimeMin > 1) {
            return {...state, breakTimeMin: state.breakTimeMin - 1};
        }
        return state;
    case 'DECREASE_TASK_TIME':
        if(state.taskTimeMin > 1) {
            return {...state, taskTimeMin: state.taskTimeMin - 1};
        }
        return state;

    case 'ADD_NEW_TASK':
        if(action.name.length > 0) {
            const newTask = new Task(action.name, action.time, action.break, false);
            let newState = {...state, todos: [...state.todos]};
            newState.todos.push(newTask);
            newState.todos.push({title: "Break", breakTime: action.break, type:"Break"});
            newState.taskTimeMin = 25;
            newState.breakTimeMin = 5;
            return newState;
        }
        return state;    

    case 'DELETE_TODO': 
        let i = 0;

        for(; i < state.todos.length; i += 1) {
            if(state.todos[i].title === action.deleteItem.title){
                break;
            }
        }
        const newTodos = [...state.todos.slice(0,i), ...state.todos.slice(i+2,state.todos.length)];

        return {...state, todos: [...newTodos]};

    case 'TASK_COMPLETED':
        const tasks = [...state.todos];
        tasks.shift();

        return {...state, todos:[...tasks]};

    case 'RESET':
        newState = {...state};
        newState.taskTimeMin = 25;
        newState.breakTimeMin = 5;

        return newState;

    default:
        return defaultTaskState;

    }
};

const rootReducer = handleTasks;

export default rootReducer;
