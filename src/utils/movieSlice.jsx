import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieTrailer: null,
    popularMovie: null,
  },
  reducers: {
    fetchMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    fetchPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
  },
});

export const { fetchMovieTrailer, fetchPopularMovie } = movieSlice.actions;
export default movieSlice.reducer;
