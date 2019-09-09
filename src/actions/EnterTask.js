const ENTERTASK = 'ENTER_TASK';

const EnterTask = (t) => {
    return {
        type: ENTERTASK,
        task: t
    };
};

export default EnterTask;