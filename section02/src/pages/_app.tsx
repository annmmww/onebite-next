import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test"); // 이동하고 싶은 경로
  };
  // 프로그레메틱하게 페이지 이동 -> 프리페칭이 이루어지지 않음
  // 프리페칭이 되게 하려면 router 객체를, 특정 메서드를 통해 코드 작성 필요

  // 결과적으로 버튼 클릭 -> 함수 실행 -> push 메서드 실행
  // 라우터 객체의 push 메서드는 인수로 전달받은 경로로 페이지를 CSR 방식으로 이동

  // 마운트 되었을 때 딱 한 번만 실행
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
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
