import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

async function AllBooks() {
  // const response = await fetch(`http://localhost:12345/book`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  // 에러처리
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const allBooks: BookData[] = await response.json(); // 타입을 미리 지정 -> map 메서드에서 타입 오류 해결
  // console.log(allBooks);

  return (
    <div>
      {/* 타입스크립트는 fetch 요청의 결과값이 어떤 타입으로 들어올지 알 수 없으므로 any로 추론 */}
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  // const response = await fetch(`http://localhost:12345/book/random`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  // fetch를 모든 도서, 추천 도서 데이터를 불러오기 위해 2번을 진행해야 하는데
  // 코드 가독성이 떨어지므로, 컴포넌트로 따로 나눠줌

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {/* 컴포넌트 렌더링 */}
        <AllBooks />
      </section>
    </div>
  );
}
