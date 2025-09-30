import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>세팅 헤더</div>
      {/* 페이지 컴포넌트 랜더링 */}
      {children}
    </div>
  );
}
