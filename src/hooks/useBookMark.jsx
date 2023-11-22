import { useDispatch } from "react-redux";
import { fetchBookMark } from "../utils/movieSlice";
import { useEffect } from "react";

const useBookMark = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookMark(localStorage.getItem("bookmark")));
  }, []);
};

export default useBookMark;
