import { BookData } from "@/types";

// 비동기로 반환하기 때문에 Promise
// 반환하는 타입은 types.ts에 저장된 타입
// 배열로 반환
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `http://localhost:12345/book`; // 모든 도서의 데이터

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json(); // 응답값을 JSON 포맷으로 변환해서 반환
  } catch (err) {
    console.error(err);
    return [];
  }
}
