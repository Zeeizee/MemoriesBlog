import React, { useState, useEffect } from "react";
import "./Posts.css";
// import { useDispatch,useSelector } from 'react-redux';
// import {fetchAllPosts} from './actionCreators/posts'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../actionCreators/posts";
import PostsForm from "./Forms/PostsForm";
import Post from "./post/Post";
import { Spinner } from "react-bootstrap";

function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  const data = useSelector((store) => store.posts.posts);
  

  return (
    <div className="main">
      <div className="header">
        <h2 className="text-warning mt-4">My Blog Posts</h2>
        <img src="" alt="" />
      </div>
      <div className="content d-flex flex-column-reverse flex-md-row justify-content-start justify-content-md-around align-items-center align-items-md-start">
        <div className="LeftSide w-100 w-md-75  row d-flex justify-content-center">
          {
            <div className="row justify-content-center justify-content-md-start align-items-center">
              {data.length ? (
                data.map((item) => {
                  return <Post data={item} />;
                })
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="warning" />
                  </div>

                  <span className="text-warning">Loading...</span>
                </div>
              )}
            </div>
          }
        </div>
        <div className="RightSide w-md-25">
          <PostsForm />
        </div>
      </div>
    </div>
  );
}

export default Posts;
