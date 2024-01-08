import React from "react";

export default function NewsItem(props){
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          >
            {props.source}
          </span>
          <img
            src={
              props.imgurl
                ? props.imgurl
                : "https://media.istockphoto.com/vectors/headline-newspaper-isolated-on-white-background-vector-id610241496?k=6&m=610241496&s=612x612&w=0&h=6caQda6YdlVSZEd1OtMeVQiQj-WlbhLYEMHfAYiCQsU="
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.descripton}</p>
            <a href={props.newsURL} className="btn btn-sm btn-primary">
              Read 
            </a>
            <p class="card-text">
              <small class="text-body-secondary">
                Last updated by {props.author} on {new Date(props.date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
}

//title, descripton, imgurl, newsURL, author, date, source