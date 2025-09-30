"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./serachbar.module.css";

export default function Searchbar() {
  const router = useRouter(); // 라우터 객체
  const searchParams = useSearchParams(); // 현재 페이지에 전달된 쿼리 스트링의 값을 꺼내오는 기능 제공
  const [search, setSearch] = useState("");

  // router.query.q; // 앱 라우터에선 이렇게 불러올 수 없음
  // 앱 라우터의 인스턴스 형식에는 쿼리라는 프로퍼티가 없음
  const q = searchParams.get("q"); // 어떤 쿼리 스트링을 보내고 싶은지 인수로 전달

  // 현재 쿼리 스트링 q의 값이 변할 때마다, SearchState 값을 쿼리 스트링 값으로 업데이트
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  // 사용자가 input에 입력하면 search state 에 보관
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    // 현재 입력한 값이 없거나, 현재 쿼리 스트링의 값이 search state값과 같다면, 추가 검색이 불필요하니 예외처리
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
