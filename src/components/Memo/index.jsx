import React, { useState, useEffect } from "react";
import Head from "../Head";
import Body from "../Body";
import "./index.css";

export const Memos = React.createContext();

const Memo = () => {
  // localStrage から memo を取得
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("react-memo")) || []
  );

  // ADD
  const handleMemoAdd = () => {
    const newMemo = {
      id: Math.random().toString(32).substring(2),
      content: "dummy",
    };
    const newMemos = [...memos, newMemo];
    setMemos(newMemos);
  };

  // localStrage に memo を保存
  useEffect(() => {
    localStorage.setItem("react-memo", JSON.stringify(memos));
  }, [memos]);

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
