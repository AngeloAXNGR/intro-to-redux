import { createSlice } from "@reduxjs/toolkit";

import { reset } from "../actions";

// Slices creates reducers and action types
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // mini-reducer functions
    // think of these as individual cases in a switch statement
    // in useReducer
    // a piece of state managed by reducer
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // out of the box, redux uses immer which allows for
      // mutability in our state
      // normally you would write something like [...state, action.payload]
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      // use .indexOf to find the index where action.payload exists
      const index = state.indexOf(action.payload);
      // Remove one element
      state.splice(index, 1);
    }
  },
  // builder to watch for additional action types (like getting movies/reset)
  extraReducers(builder) {
    // first argument is an action type
    // second argument is a mini reducer function (kind of like addSong and removeSong)
    // reset.toString() = 'app/reset'
    // you can also remove .toString()
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;

export const songsReducer = songsSlice.reducer;
