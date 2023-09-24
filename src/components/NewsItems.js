import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{
              left:"90%",
              zIndex:"1"
            }}>
              {source}
            </span>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
