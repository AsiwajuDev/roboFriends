import { CHANGE_SEARCHFIELD } from "./Constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      //   return { ...state, searchField: action.payload };
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
