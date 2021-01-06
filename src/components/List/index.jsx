import React, { useContext } from "react";
import { Memos } from "../Memo";

const List = () => {
  const [memos, setMemos] = useContext(Memos);

  const showMemoList = memos.map((memo) => {
    return <li key={memo.id}>{memo.content}</li>;
  });

  return <ul>{showMemoList}</ul>;
};

export default List;
