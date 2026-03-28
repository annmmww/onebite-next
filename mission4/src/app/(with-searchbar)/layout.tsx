import { ReactNode } from "react";
import Searchbar from "../../components/Searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Searchbar />
      {children}
    </div>
  );
}
