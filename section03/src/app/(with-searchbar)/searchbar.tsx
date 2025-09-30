"use client";
import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  // 이 change 이벤트는, HTMLInputElement에서 발생한 것
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
}
