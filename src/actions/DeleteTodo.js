const DELETE_TODO = 'DELETE_TODO';

export const deleteTODO = (item) => {
    return {
        type: DELETE_TODO,
        deleteItem: item
    };
};
