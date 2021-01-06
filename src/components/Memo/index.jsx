import React, { useState, useEffect, useContext } from "react";
import Head from "../Head";
import Body from "../Body";
import { Mode } from "../../App";
import "./index.css";

const initialState = {
  useMemo: {
    id: "",
    content: "",
  },
};

export const Memos = React.createContext();
export const CurrentMemo = React.createContext();

const Memo = () => {
  // localStrage から memo を取得
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("react-memo")) || []
  );
  const [currentMemo, setCurrentMemo] = useState(initialState.useMemo);
  const [darkMode, setDarkMode] = useContext(Mode);

  // ADD
  const handleMemoAdd = () => {
    const newMemo = {
      id: Math.random().toString(32).substring(2),
      content: "",
    };
    const newMemos = [...memos, newMemo];
    setMemos(newMemos);
    setCurrentMemo(newMemo);
  };

  // DELETE
  const handleMemoDelete = () => {
    const newMemos = memos.filter((memo) => memo.id !== currentMemo.id);
    const newMemo = {
      id: "",
      content: "",
    };
    setMemos(newMemos);
    setCurrentMemo(newMemo);
  };

  // memos 一覧に変更があるたびに localStrage に保存
  useEffect(() => {
    localStorage.setItem("react-memo", JSON.stringify(memos));
  }, [memos]);

  // 編集（選択）中の memo の内容を memos 一覧の該当部分に反映
  useEffect(() => {
    const newMemos = memos.map((memo) =>
      memo.id === currentMemo.id ? currentMemo : memo
    );
    setMemos(newMemos);

    // Warning 回避
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMemo]);

  return (
    <div className={darkMode ? "memo is-dark" : "memo"}>
      <Memos.Provider value={[memos, setMemos]}>
        <CurrentMemo.Provider value={[currentMemo, setCurrentMemo]}>
          <Head onMemoAdd={handleMemoAdd} onMemoDelete={handleMemoDelete} />
          <Body />
        </CurrentMemo.Provider>
      </Memos.Provider>
    </div>
  );
};

export default Memo;
