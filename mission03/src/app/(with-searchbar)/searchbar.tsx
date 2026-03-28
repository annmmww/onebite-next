"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <form className="flex gap-2 w-full" onSubmit={onSubmit}>
      <input
        className="basis-6/7 border-gray-200 border-2 rounded-md p-2"
        type="text"
        value={search}
        onChange={onChangeSearch}
      />
      <button
        type="submit"
        className="basis-1/7 bg-red-500 text-white border-red-500 border-2 rounded-md font-bold"
      >
        검색
      </button>
    </form>
  );
}
