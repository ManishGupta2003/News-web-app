import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [input, SetInput] = useState("india");
  const apiKey = "9e8568ac6669490e80fd9d3331c56470";

  const getNews = async () => {
    console.log(apiKey);

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${input}&apiKey=${apiKey}`
    );
    const jsonData = await response.json();
    onSearch(jsonData.articles);
    console.log(jsonData.articles);
    console.log(input);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 px-4 py-2">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NEWS WEB
          </span>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="w-64 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search news..."
            onChange={(e) => {
              SetInput(e.target.value);
            }}
          />
          <button
            type="button"
            className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={getNews}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
