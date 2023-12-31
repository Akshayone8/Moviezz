import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieTrailer: null,
    popularMovie: null,
    topRatedMovie: null,
    movieDetail: null,
    popularSeries: null,
    seriesDetail: null,
    bookMarkDetail: [],
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
    fetchTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    fetchPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    fetchSereisDetail: (state, action) => {
      state.seriesDetail = action.payload;
    },
    fetchBookMark: (state, action) => {
      state.bookMarkDetail = action.payload;
    },
  },
});

export const {
  fetchMovieTrailer,
  fetchPopularMovie,
  fetchMovieDetail,
  fetchTopRatedMovie,
  handlePagination,
  fetchPopularSeries,
  fetchSereisDetail,
  fetchBookMark,
} = movieSlice.actions;
export default movieSlice.reducer;
