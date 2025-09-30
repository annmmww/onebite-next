"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// 이제 앱 라우터 버전의 패키지인 next/navigation 의 useRouter를 import
// 만약 next/router의 useRouter 가져오면 오류남!

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // 이 change 이벤트는, HTMLInputElement에서 발생한 것
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
