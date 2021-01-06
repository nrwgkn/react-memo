import React from "react";
import List from "../List";
import Editor from "../Editor";
import "./index.css";

const Body = () => {
  return (
    <div className="memo-body">
      <div className="memo-body_list">
        <List />
      </div>
      <div className="memo-body_content">
        <Editor />
      </div>
    </div>
  );
};

export default Body;
