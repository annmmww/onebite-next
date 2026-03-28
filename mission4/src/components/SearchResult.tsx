import MovieItem from "@/src/components/MovieItem";
import { MovieData } from "@/src/type";
import { delay } from "@/src/util/delay";

export default async function SearchResult({ q }: { q: string }) {
  await delay(1000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: "force-cache" },
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다~</div>;
  }
  const searchResult: MovieData[] = await response.json();

  return (
    <div className="grid grid-cols-3 gap-3 mt-2">
      {searchResult.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
