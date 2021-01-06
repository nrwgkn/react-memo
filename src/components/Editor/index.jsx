import React, { useContext, useState, useEffect } from "react";
import { CurrentMemo } from "../Memo";

const Editor = () => {
  const [currentMemo, setCurrentMemo] = useContext(CurrentMemo);
  const [editMemoContent, setEditMemoContent] = useState("");

  // memo の編集
  const handleMemoChange = (e) => {
    setEditMemoContent(e.target.value);
    setCurrentMemo({
      ...currentMemo,
      content: e.target.value,
    });
  };

  // 選択した memo の内容を Editor に反映させる
  useEffect(() => {
    setEditMemoContent(currentMemo.content);
  }, [currentMemo]);

  return (
    <textarea value={editMemoContent} onChange={handleMemoChange}></textarea>
  );
};

export default Editor;
