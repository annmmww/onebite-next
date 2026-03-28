import { MovieData } from "@/src/type";
import MovieItem from "@/src/components/MovieItem";
import { delay } from "@/src/util/delay";

export default async function AllMovie() {
  await delay(2000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" },
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다~</div>;
  }
  const allMovie: MovieData[] = await response.json();

  return (
    <div className="flex gap-3 mt-2 overflow-x-auto no-scrollbar">
      {allMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
