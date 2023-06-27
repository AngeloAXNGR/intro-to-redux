import { createSlice } from "@reduxjs/toolkit";

import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }

    // NOTE THIS mini-reducer is extracted using createAction hook
    // so it can be used across all slices
    // instead of this, we use extraReducers

    // reset(state, action) {
    //   // Dont do this!: state = [] as immer encourages mutability
    //   // doing so will make a copy of the state which is not idead
    //   // instead do this:
    //   return [];
    // }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
