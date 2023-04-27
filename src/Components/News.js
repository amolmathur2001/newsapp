import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { TailSpin } from "react-loader-spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  //normal variable decalartion
  //propType and default prop decalaration(JavaScript Object)

  //constructor of the class is called first
  const [articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalRes, setTotalRes] = useState(0);
  //lifecycle method (componentDidMount)
  useEffect(() => {
    document.title = `${props.category.toUpperCase()}-NewsMan`;
    async function updateNews() {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=6`;

      //using fetch api
      let data = await fetch(url);
      let res = await data.json();
      setArticles(res.articles);
      setTotalRes(res.totalResults);
      setLoading(false);
      //using data.json we get parse Data
    }
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(async () => {
      //this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=6`;
      setPage(page+1)
      //using fetch api
      let data = await fetch(url);
      let res = await data.json();
      setArticles(articles.concat(res.articles));
      setTotalRes(res.totalResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container my-3">
      <h2 style={{margin : "15%" , backgroundColor : "#2B3035", color : "white", padding : "25px"}}>NewsMan - Top {props.category} Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalRes}
        loader={
          <div className="spinner">
            <TailSpin />
          </div>
        }
      >
        <div className="container">
          {Loading ? (
            <div className="spinner">
              <TailSpin />
            </div>
          ) : (
            <div className="row-items my-4">
              {articles.map((element, index) => {
                return (
                  <div className="col my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      descripton={
                        !element.description ? element.description : ""
                      }
                      imgurl={element.urlToImage}
                      newsURL={element.url}
                      author={!element.author ? "unknown" : element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

// all prop types and default props are declared outside the functional component
News.defaultProps = {
  category: "general",
};

News.propTypes = {
  category: PropTypes.string,
};
/* 
    componentDidMount() -> LifeCycle of the React
    it will run after the render method



       

*/
