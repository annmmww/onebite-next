import { Suspense } from "react";
import SearchResult from "@/src/components/SearchResult";
import MovieListSkeleton from "@/src/components/skeleton/MovieListSkeleton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <main className="flex flex-col">
      <h3 className="font-bold text-xl">검색 결과</h3>
      <Suspense key={q || ""} fallback={<MovieListSkeleton />}>
        <SearchResult q={q || ""} />
      </Suspense>
    </main>
  );
}
