import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-items";
import { GetStaticPropsContext } from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
// next/navigation은 App Router에 쓸 것

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   /*
//   const q = context.query.q; // Property 'query' does not exist on type 'GetStaticPropsContext'.ts(2339)
//   // getStaticProps 함수에게 전달되는 컨텍스트라는 매개변수에는 쿼리 프로퍼티가 존재하지 않음
//   // 왜냐면, getStaticProps는 빌드 타임에 딱 한 번만 실행,
//   // 근데 빌드 타임엔 쿼리 스트링을 알 수 없음
//   const books = await fetchBooks(q as string);

//   return {
//     props: { books },
//   };*/
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  // 리액트에서 했던 방식
  const router = useRouter();
  const q = router.query.q; // 쿼리스트링을 꺼내오기

  // 검색 결과 불러오기
  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      // 검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]); // 검색어가 있다면

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
