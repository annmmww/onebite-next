import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styles from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(""); // 검색어를 저장할 state

  // 새로 고침해도 검색어가 서치바에 유지
  const q = router.query.q as string; // 현재 쿼리 스트링인 q값을 불러옴
  // ➡️ 쿼리 스트링은 string이나, string[]이나, undefined로 추론됨

  // q의 값이 변하면, 검색어가 바뀌었다는 거니까
  // setSearch 함수를 호출해서 q 값이 있으면 q값을 넣고 아니면 빈 문자열 설정
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  // React에서 발생한 ChangeEvent 객체 타입,
  // HTML의 input 엘리멘트에서 발생한 이벤트 태그에서 발행한 이벤트
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }; // 사용자가 input 태그에 입력하는 값을 실시간으로 search state에 저장

  const onSubmit = () => {
    // if (!search) return;
    // 현재 search 값이 없거나, 현재 입력된 값과 현재 검색어의 값이 동일하면 버튼이 눌리지 않음
    if (!search || search === q) return;
    router.push(`search?q=${search}`);
    // 템플릿 리터럴로, search라는 검색어를 쿼리 스트링으로 전달하도록 설정
  };

  // 엔터로 검색 버튼 누르기
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={styles.searchbar_container}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
