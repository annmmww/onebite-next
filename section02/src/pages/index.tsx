// index 페이지
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-items";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  /* 직렬 방식 */
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();

  /* 병렬 방식 */
  // 인수로 전달한 배열 안에 들어 있는 모든 비동기 함수를 동시에 실행
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]); // 반환은 배열이니까...
  // 위와 같이 병렬로 API 리퀘스트가 동시에 발송 -> 좀 더 빠르게 렌더링

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
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
