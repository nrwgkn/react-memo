import React, { useContext } from "react";
import { Memos } from "../Memo";

const List = () => {
  const [memos, setMemos] = useContext(Memos);

  const showMemoList = memos.map((memo) => {
    return (
      <li key={memo.id}>
        <p>{memo.content}</p>
      </li>
    );
  });

  return <ul>{showMemoList}</ul>;
};

export default List;
