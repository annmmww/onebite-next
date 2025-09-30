import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

// 폰트나 메타 데이터는 불필요하니까 제거
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          {/* 헤더 */}
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          {/* 메인 */}
          <main>{children}</main>
          {/* 푸터 */}
          <footer>제작 @winterlood</footer>
        </div>
      </body>
    </html>
  );
}
