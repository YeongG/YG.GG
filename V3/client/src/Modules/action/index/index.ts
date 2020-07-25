export const RESET_INDEX = "index/RESET_INDEX" as const;
export const ADD_INDEX = 'index/ADD_INDEX' as const;

export const resetIndex = () => ({
    type:RESET_INDEX,
});

export const addIndex = () => ({
    type:ADD_INDEX,
});

export type IndexActionType = (
    | ReturnType<typeof resetIndex>
    | ReturnType<typeof addIndex>
);