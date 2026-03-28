import { ReactNode } from "react";
import Searchbar from "./searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Searchbar />
      {children}
    </div>
  );
}
