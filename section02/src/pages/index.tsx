// index 페이지
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/book-items";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

/* SSG 방식 */
export const getStaticProps = async () => {
  console.log("인덱스 페이지"); // 딱 한 번만 출력

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  // getStaticSideProps도, 불러온 데이터를 props로서 컴포넌트에 전달하는 역할
  // 따라서 반환값도 props를 포함한 객체
  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 타입도 SSG 로 변경
  // InferGetStaticPropsType: 반환값 타입을 자동으로 추론해서 props의 타입으로 설정하는 역할

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {/* 추천 도서를 렌더링 */}
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <div></div>
      <section>
        <h3>등록된 모든 도서</h3>
        {/* 데이터베이스에 등록된 도서들 렌더링 */}
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
