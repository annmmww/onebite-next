import MovieItemSkeleton from "@/src/components/skeleton/MovieItemSkeleton";

export default function MovieListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="flex gap-3 mt-2 overflow-x-auto no-scrollbar">
      {Array.from({ length: count }).map((_, index) => (
        <MovieItemSkeleton key={index} />
      ))}
    </div>
  );
}
