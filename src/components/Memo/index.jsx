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

  return (
    <div className="memo">
      <Memos.Provider value={[memos, setMemos]}>
        <Head />
        <Body />
      </Memos.Provider>
    </div>
  );
};

export default Memo;
