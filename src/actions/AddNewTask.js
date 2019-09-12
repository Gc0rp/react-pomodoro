const ADDNEWTASK = 'ADD_NEW_TASK';

const AddNewTask = (n, t, b) => {
    return {
        type: ADDNEWTASK,
        name:n,
        time: t,
        break: b
    };
};

export default AddNewTask;