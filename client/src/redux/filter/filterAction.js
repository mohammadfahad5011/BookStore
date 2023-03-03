export const statusChanged = (status) => {
    return {
        type: 'STATUSCHANGED',
        payload: status,
    };
};