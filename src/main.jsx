import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Body from "./Components/Body/Body.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Series from "./Components/Series/Series.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail/MovieDetail.jsx";
import SeriesDetail from "./Components/SeriesDetail/SeriesDetail.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Fixed: children should be an array
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/movie-detail/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/series-detail/:seriesId",
        element: <SeriesDetail />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/favorite",
        element: <Series />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
