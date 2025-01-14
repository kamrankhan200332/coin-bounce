import React, { useState, useEffect } from "react";
import { getNews } from "../../api/external";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function newsApiCall() {
      const response = await getNews();
      setArticles(response);
    })();

    // cleanup function
    setArticles([]);
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  if (articles.length == 0) {
    return <Loader text="homepage" />
  }

  return (
    <>
      <div className="text-[32px] mt-[40px] flex justify-center">
        Latest Articles
      </div>
      <div className="flex flex-wrap justify-center">
        {articles.map((article) => (
          <div
            className="bg-black border border-white rounded-[10px] my-[40px] mx-[20px] cursor-pointer w-[20%] p-[16px] flex items-center justify-center flex-col"
            key={article.url}
            onClick={() => handleCardClick(article.url)}
          >
            <img
              src={article.urlToImage}
              alt="articleImage"
              className="rounded-[10px] w-[100%] h-[100%]"
            />
            <h3 className="text-left bg-transparent">{article.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
