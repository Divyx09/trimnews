import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=cricket&from=2023-09-22&to=2023-09-22&sortBy=popularity&apiKey=f463f408e3304af8bd813b19d3878f5f&pageSize=20  ";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevPage = async () => {
    let url = `https://newsapi.org/v2/everything?q=cricket&from=2023-09-22&to=2023-09-22&sortBy=popularity&apiKey=f463f408e3304af8bd813b19d3878f5f&pageSize=20&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    document.getElementById("next").classList.remove("disabled");
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
    console.log("Prev");
  };
  handleNextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 24)) {
      document.getElementById("next").classList.add("disabled");
    } else {
      let url = `https://newsapi.org/v2/everything?q=cricket&from=2023-09-22&to=2023-09-22&sortBy=popularity&apiKey=f463f408e3304af8bd813b19d3878f5f&pageSize=20&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
    console.log("Next");
  };

  render() {
    return (
      <div className="container my-4">
        <h1>BHARAT TIMES - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                <NewsItems
                  title={e.title ? e.title.slice(0, 44) : ""}
                  description={e.description ? e.description.slice(0, 80) : ""}
                  imageUrl={
                    e.urlToImage
                      ? e.urlToImage
                      : "https://www.financialexpress.com/wp-content/uploads/2023/07/Breaking-News-15.jpg?w=1024"
                  }
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevPage}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            id="next"
            className="btn btn-dark"
            onClick={this.handleNextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
