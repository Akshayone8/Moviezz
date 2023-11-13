import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieTrailer: null,
    popularMovie: null,
    movieDetail: null,
  },
  reducers: {
    fetchMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    fetchPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    fetchMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});

export const { fetchMovieTrailer, fetchPopularMovie, fetchMovieDetail } =
  movieSlice.actions;
export default movieSlice.reducer;
