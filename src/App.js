import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import HeroSection from "./components/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import UnsplashImages from "./components/UnsplashImages";
import Loading from "./components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("random");
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const apiRoot = "https://pixabay.com/api/";

    axios
      .get(
        `${apiRoot}?key=10211908-a8e9e5df306cc8a01234b4cc2&q=${query}&image_type=photo&page=${page}`
      )

      .then(({ data }) => setImages([...images, ...data.hits]))
      .catch((err) => console.log(err));
    setPage((p) => p + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(images);
  return (
    <div className="App">
      <HeroSection setQuery={setQuery} setImages={setImages} />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchData}
        hasMore={true}
        loader={<Loading />}
      >
        <UnsplashImages images={images} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
