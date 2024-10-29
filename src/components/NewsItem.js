import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://ichef.bbci.co.uk/news/1024/branded_news/3eab/live/eb800b10-90f1-11ef-8656-21c0988af62a.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p class="card-text" style={{}}>
            <small className="text-muted">
              <span style={{ color: "red" }}>
                By {author} on {new Date(date).toGMTString()}
              </span>
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
