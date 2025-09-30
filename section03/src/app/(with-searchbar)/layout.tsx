import { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

// (with-searchbar) 에 있는 페이지 역할을 하는 컴포넌트에 모두 적용
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
