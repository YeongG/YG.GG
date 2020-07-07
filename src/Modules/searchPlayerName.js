const ADD = "player/ADD";

const add = playerName => ({
    type:ADD,
    playerName
});

const searchPlayerNameReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return state.concat(action.playerName);
        default:
            return state;
    }
};

export default searchPlayerNameReducer;