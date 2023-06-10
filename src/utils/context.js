import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MSG":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "ADD_USER_DETAILS":
      return action.payload;

    default:
      return state;
  }
};

const initialState = {
  messages: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        userName: state.userName,
        messages: state.messages,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
