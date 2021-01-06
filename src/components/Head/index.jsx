import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import "./index.css";

const Head = ({ onMemoAdd, onMemoDelete }) => {
  // ADD
  const handleMemoAdd = () => {
    onMemoAdd();
  };

  // DELETE
  const handleMemoDelete = () => {
    onMemoDelete();
  };

  return (
    <div className="memo-head">
      <div className="header">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleMemoAdd}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleMemoDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Head;
