import React, { useContext, useState } from "react";
import { Memos, CurrentMemo } from "../Memo";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const List = () => {
  const [memos, setMemos] = useContext(Memos); // eslint-disable-line
  const [currentMemo, setCurrentMemo] = useContext(CurrentMemo);
  const [searchMemoResults, setSearchMemoResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  // memo 選択
  const handleMemoClick = (id) => {
    const clickedMemo = memos.find((memo) => memo.id === id);
    setCurrentMemo(clickedMemo);
  };

  // memo 検索
  const handleMemoSearch = (e) => {
    const searchResults = memos.filter((memo) => {
      return (
        memo.content.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    setSearchMemoResults(searchResults);
    setIsSearch(true);
  };

  // memo 一覧表示
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

  // memo 検索結果一覧表示
  const showSearchResults = searchMemoResults.map((memo) => {
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

  return (
    <>
      <div>
        <div className="memo-body_search">
          <form action="">
            <input
              type="text"
              placeholder="search"
              onChange={handleMemoSearch}
            />
            <IconButton aria-label="search memo" style={{ padding: 0 }}>
              <SearchIcon />
            </IconButton>
          </form>
        </div>
      </div>
      {(() => {
        if (!isSearch) {
          return <ul>{showMemoList}</ul>;
        } else {
          if (searchMemoResults) {
            return <ul>{showSearchResults}</ul>;
          }
        }
      })()}
    </>
  );
};

export default List;
