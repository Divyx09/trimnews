import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title =`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase()} - BharatTimes`
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    console.log("Prev");
  };
  handleNextPage = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,

        loading: false,
      });
    }
    console.log("Next");
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center bg-info" style={{margin:"35px 0px"}}>BHARAT TIMES - {(this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase())} Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="container">
        
        {/* <div className="row" style={{border:"2px solid  black"}}> */}
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
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
                  author={e.author}
                  date={e.publishedAt}
                  source={e.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePrevPage}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default News;
