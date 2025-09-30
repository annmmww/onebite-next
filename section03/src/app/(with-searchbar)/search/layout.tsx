import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 이제 /search/* 모든 파일에 아래 요소가 공통적으로 나타날 것 */}
      <div>임시 서치바</div>
      {/* 페이지 컴포넌트 랜더링 */}
      {children}
    </div>
  );
}
