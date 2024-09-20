import React, { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/Cards";

function App() {
  const [searchNews, setSearchNews] = useState([]);

  const handleSearch = (e) => {
    setSearchNews(e);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Card searchNews={searchNews} />
    </>
  );
}

export default App;
