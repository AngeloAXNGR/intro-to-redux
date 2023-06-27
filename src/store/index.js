import { configureStore } from "@reduxjs/toolkit";

import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

const store = configureStore({
  // BIG State Object
  reducer: {
    // Initial state comes from the slice songsSlice
    // reducer function acts as a wrapper for our reducers function
    songs: songsReducer,
    movies: moviesReducer
  }
});

// console.log(songsSlice.actions);

// const startingState = store.getState();

// console.log(JSON.stringify(startingState));

// // Longcut
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!"
// });

// // Shortcut
// store.dispatch(songsSlice.actions.addSong("New Song!"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store, reset, addSong, removeSong, addMovie, removeMovie };
