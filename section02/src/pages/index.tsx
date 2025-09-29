// index 페이지
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-items";
import { InferGetServerSidePropsType } from "next";

// 넥스트에서 약속된 이름의 함수를 만들어 내보내면
// 해당 페이지는 SSR로 동작하도록 자동 설정
// return: props라는 객체 프로퍼티를 포함하는 단 하나의 객체
// 그래야만 페이지 역할을 하는 컴포넌트에 전달 가능 (프레임워크 문법)
export const getServerSideProps = () => {
  // 페이지 역할을 하는 컴포넌트보다 먼저 실행되이서
  // 컴포넌트에 필요한 백엔드 데이터 등을 불러오는 함수

  // 단, 주의점.
  // 사전 렌더링을 하는 과정에서 딱 한 번만 실행이 될 것이고,
  // 서버 측에서만 실행되는 함수
  console.log("서버 사이드 프롭스예요"); // -> 브라우저에서 출력되지 않음
  // 다만 터미널에서 나옴

  // window.location; -> window는 undefined 인데 undefined에서 location을 꺼내려고 하니 오류 발생
  // window.confirm();

  const data = "hello"; // 이런 데이터를 불러왔다고 하면
  // 이렇게 객체로 넣어줘서 홈 컴포넌트에 전달
  return {
    props: {
      data,
    },
  };
};

// 기존 리액트 앱에서 props를 받아오듯이 똑같이 작성해서 받아올 수 있음
// props의 타입 - 대부분의 타입 정의는 Next.js에서 제공하는 것들만 이용해도 가능
// InferGetServerSidePropsType : getServerSideProps 함수의 반한값 타입을 자동으로 추론
export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  // 컴포넌트가 마운트된 이후,
  // 즉 화면에 나타난 이후에 실행되는 함수를 만드는 곳이기 때문에
  // 오직 브라우저에서만 실행
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <div></div>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// 이 메서드가 페이지 컴포넌트를, page라는 이름의 매개변수로 받아서
// 받은 매개변수를 return SearchableLayout 이라는
// 방금 만든 레이아웃으로 감싼 형태로 리턴하도록 설정
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
