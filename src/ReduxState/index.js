import { createAction, configureStore, createReducer } from "@reduxjs/toolkit";

const initialState = {
  countryId: "",
  numberOf: "",
  theme: "light",
};

export const setCountryId = createAction("setCountryId");
export const setNumberOf = createAction("setNumberOf");
export const setTheme = createAction("setTheme");
const reducer = createReducer(initialState, {
  [setCountryId]: (state, action) => {
    state.countryId = action.payload;
  },
  [setNumberOf]: (state, action) => {
    state.numberOf = action.payload;
  },
  [setTheme]: (state, action) => {
    state.theme = action.payload;
  },
});

export const store = configureStore({
  reducer,
});
