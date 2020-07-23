const ADD = "PLAYER/ADD";
const LOAD = "PLAYER/LOAD";

export const add = playerName => ({
    type:ADD,
    playerName
});

export const load = () => ({
    type:LOAD
});

const searchPlayerNameReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            if(state.find(name => name === action.playerName)) return state; 
            const newArray = state.concat(action.playerName);
            const strJson = JSON.stringify(newArray);
            window.localStorage.setItem("lastlySeachName",strJson);
            return newArray;
        case LOAD:
            const strObject = window.localStorage.getItem("lastlySeachName");
            const jsonArray = JSON.parse(strObject);
            return jsonArray;
        default:
            return state;
    }
};

export default searchPlayerNameReducer;