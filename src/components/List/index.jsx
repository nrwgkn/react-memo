import React, { useContext } from "react";
import { Memos, CurrentMemo } from "../Memo";

const List = () => {
  const [memos, setMemos] = useContext(Memos);
  const [currentMemo, setCurrentMemo] = useContext(CurrentMemo);

  const handleMemoClick = (id) => {
    const clickedMemo = memos.find((memo) => memo.id === id);
    setCurrentMemo(clickedMemo);
  };

  const showMemoList = memos.map((memo) => {
    return (
      <li
        key={memo.id}
        className={currentMemo.id === memo.id ? "is-current" : ""}
        onClick={() => handleMemoClick(memo.id)}
      >
        <p>{memo.content}</p>
      </li>
    );
  });

  return <ul>{showMemoList}</ul>;
};

export default List;
