import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test"); // 이동하고 싶은 경로
  };

  // 결과적으로 버튼 클릭 -> 함수 실행 -> push 메서드 실행
  // 라우터 객체의 push 메서드는 인수로 전달받은 경로로 페이지를 CSR 방식으로 이동

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
