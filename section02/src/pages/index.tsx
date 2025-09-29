// index 페이지
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h1 className={style.h2}>H2</h1>
    </>
  );
}

// 이 메서드가 페이지 컴포넌트를, page라는 이름의 매개변수로 받아서
// 받은 매개변수를 return SearchableLayout 이라는
// 방금 만든 레이아웃으로 감싼 형태로 리턴하도록 설정
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
