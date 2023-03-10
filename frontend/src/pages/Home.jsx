import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import { getItems } from "../features/itemSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const {
    categories,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    message: categoryErrorMessage,
  } = useSelector((state) => state.category);
  const {
    items,
    isLoading: itemIsLoading,
    isError: itemIsError,
    message: itemErrorMessage,
  } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryIsError) {
      console.log(categoryErrorMessage);
      return;
    }

    if (itemIsError) {
      console.log(itemErrorMessage);
      return;
    }

    dispatch(getCategories());
    dispatch(getItems());
  }, [
    dispatch,
    categoryIsError,
    categoryErrorMessage,
    itemIsError,
    itemErrorMessage,
  ]);

  return (
    <div className="h-screen bg-slate-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <section className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
        <div className="flex-1 bg-cyan-300 md:max-w-md">
          <div className="flex justify-between p-4">
            <div>
              {categoryIsLoading ? (
                <LoadingSpinner />
              ) : (
                <h2 className="text-4xl font-bold">{categories.length}</h2>
              )}
              <p className="italic">Total Categories</p>
            </div>
            <div className="opacity-50">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                  fill="#292D32"
                />
                <path
                  opacity="0.4"
                  d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
                  fill="#292D32"
                />
                <path
                  d="M18.6695 13.4302H16.7695C14.5895 13.4302 13.4395 14.5802 13.4395 16.7602V18.6602C13.4395 20.8402 14.5895 21.9902 16.7695 21.9902H18.6695C20.8495 21.9902 21.9995 20.8402 21.9995 18.6602V16.7602C21.9995 14.5802 20.8495 13.4302 18.6695 13.4302Z"
                  fill="#292D32"
                />
                <path
                  opacity="0.4"
                  d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
          <div className="text-center bg-cyan-400 py-2">
            <Link to="/categories">More info &rarr;</Link>
          </div>
        </div>
        <div className="flex-1 bg-teal-400 md:max-w-md">
          <div className="flex justify-between p-4">
            <div>
              {itemIsLoading ? (
                <LoadingSpinner />
              ) : (
                <h2 className="text-4xl font-bold">{items.length}</h2>
              )}
              <p className="italic">Total Items</p>
            </div>
            <div className="opacity-50">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.15"
                  d="M4.97043 9.81038C5.06819 8.78391 5.93031 8 6.96142 8H17.0386C18.0697 8 18.9318 8.78391 19.0296 9.81038L19.7915 17.8104C19.9033 18.9846 18.9799 20 17.8005 20H6.19952C5.02004 20 4.0967 18.9846 4.20853 17.8104L4.97043 9.81038Z"
                  fill="#000000"
                />
                <path
                  d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="text-center bg-teal-500 py-2">
            <Link to="/items">More info &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
