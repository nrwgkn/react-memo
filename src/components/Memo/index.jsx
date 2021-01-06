import React, { useState } from "react";
import Head from "../Head";
import Body from "../Body";
import "./index.css";

const dummyMemo = [
  {
    id: 1,
    content: "dummyA",
  },
  {
    id: 2,
    content: "dummyB",
  },
  {
    id: 3,
    content: "dummyC",
  },
];

export const Memos = React.createContext();

const Memo = () => {
  const [memos, setMemos] = useState(dummyMemo);

  // ADD
  const handleMemoAdd = () => {
    const newMemo = {
      id: Math.random().toString(32).substring(2),
      content: "dummy",
    };
    const newMemos = [...memos, newMemo];
    setMemos(newMemos);
  };

  return (
    <div className="memo">
      <Memos.Provider value={[memos, setMemos]}>
        <Head onMemoAdd={handleMemoAdd} />
        <Body />
      </Memos.Provider>
    </div>
  );
};

export default Memo;
