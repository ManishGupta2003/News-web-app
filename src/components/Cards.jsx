import React from "react";

function Card({ searchNews }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {searchNews.map((curItem, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1 min-w-[250px]"
        >
          <a href={curItem.url} target="_blank">
            <img
              className="rounded-t-lg"
              src={curItem.urlToImage}
              alt={curItem.title}
            />
          </a>
          <div className="p-5">
            <a href={curItem.url} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {curItem.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {curItem.description || "No description available."}
            </p>
            <a
              href={curItem.url}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
