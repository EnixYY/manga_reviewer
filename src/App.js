import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContainerHeroImage from "./components/ContainerHeroImage"; // import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";
// import PageThree from "./pages/PageThree";
const Home = React.lazy(() => import("./pages/Home"));
const Search = React.lazy(() => import("./pages/Search"));
// const PageThree = React.lazy(() => import("./pages/PageThree"));

function App() {
  const [heroImage, setHeroImage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroImage = async () => {
    const url = "https://api.jikan.moe/v4/top/manga";
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      const heroImageData = await res.json();

      setHeroImage(heroImageData.data.slice(0, 9));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHeroImage();
  }, []);

  return (
    <div className="App">
      <ContainerHeroImage imgSrc={heroImage} />
      <Navbar />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            {/* <Route path="/page-two" element={<PageTwo />} /> */}
            {/* <Route path="/page-three" element={<PageThree />} /> */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
