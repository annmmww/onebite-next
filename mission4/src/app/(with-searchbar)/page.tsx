import AllMovie from "@/src/components/AllMovie";
import RecommendedMovie from "@/src/components/RecommendedMovie";
import MovieListSkeleton from "@/src/components/skeleton/MovieListSkeleton";

import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section className="h-105">
        <h3 className="font-bold text-xl">지금 추천하는 영화</h3>
        <Suspense fallback={<MovieListSkeleton />}>
          <RecommendedMovie />
        </Suspense>
      </section>
      <section>
        <h3 className="font-bold text-xl">등록된 모든 영화</h3>
        <Suspense fallback={<MovieListSkeleton />}>
          <AllMovie />
        </Suspense>
      </section>
    </div>
  );
}
