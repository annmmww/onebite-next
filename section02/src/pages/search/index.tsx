import { useRouter } from "next/router";
// next/navigation은 App Router에 쓸 것

export default function Page() {
  const router = useRouter();
  // useRoute : 이름 그대로 router라는 객체를 컴포넌트 내부에서 사용할 수 있도록 반환해주는 함수

  // console.log(router); 출력해보면, router 객체의 모든 정보를 확인할 수 있음

  // const q = router.query.q; // 쿼리 스트링의 값을 꺼내서 할당
  const { q } = router.query; // 구조 분해 할당

  return <h1>Search {q}</h1>;
}
