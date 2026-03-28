import MovieItem from "@/src/components/MovieItem";
import { MovieData } from "@/src/type";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: "force-cache" },
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다~</div>;
  }
  const searchResult: MovieData[] = await response.json();

  return (
    <main className="flex flex-col">
      <h3 className="font-bold text-xl">지금 추천하는 영화</h3>
      <div className="grid grid-cols-3 gap-3 mt-2">
        {searchResult.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </main>
  );
}
