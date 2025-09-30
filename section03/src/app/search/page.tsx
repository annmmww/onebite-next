// 페이지 역할을 하는 컴포넌트
// searchParams 라는 객체로부터 쿼리스트림 값을 불러와 사용
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  // 넥스트 앱 라우터에서는 쿼리 스트링이나 URL 파라미터와 같은 경로상에 포함되는 값들은
  // 페이지 컴포넌트에게 모두 props로써 전달됨

  // console.log(props);
  const { q } = await searchParams;

  return <div>Search 페이지: {q}</div>;
}
