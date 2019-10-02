const DELETE_TODO = 'DELETE_TODO';

export const deleteTODO = (item, taskBreak) => {
    return {
        type: DELETE_TODO,
        deleteItem: item,
        deleteBreak: taskBreak
    };
};
