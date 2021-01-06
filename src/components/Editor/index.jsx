import React, { useContext, useState, useEffect } from "react";
import { CurrentMemo } from "../Memo";

const Editor = () => {
  const [currentMemo, setCurrentMemo] = useContext(CurrentMemo);
  const [editMemoContent, setEditMemoContent] = useState("");

  const handleMemoChange = (e) => {
    setEditMemoContent(e.target.value);
    setCurrentMemo({
      ...currentMemo,
      content: e.target.value,
    });
  };

  useEffect(() => {
    setEditMemoContent(currentMemo.content);
  }, [currentMemo]);

  return (
    <textarea value={editMemoContent} onChange={handleMemoChange}></textarea>
  );
};

export default Editor;
