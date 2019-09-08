const ADDNEWTASK = 'ADD_NEW_TASK';

const AddNewTask = (n, t) => {
    return {
        type: ADDNEWTASK,
        name:n,
        time: t
    };
};

export default AddNewTask;