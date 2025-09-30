"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("클라이언트 컴포넌트!");
  return <div>{children}</div>; // 서버 컴포넌트를 import 해서 렌더링
}
