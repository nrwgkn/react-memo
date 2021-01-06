import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import "./index.css";

const Head = () => {
  return (
    <div className="memo-head">
      <div className="header">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Head;
