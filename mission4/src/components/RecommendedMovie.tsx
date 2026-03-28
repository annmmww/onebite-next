import { MovieData } from "@/src/type";
import MovieItem from "@/src/components/MovieItem";
import { delay } from "@/src/util/delay";

export default async function RecommendedMovie() {
  await delay(4000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {
      next: { revalidate: 3 },
    },
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다~</div>;
  }
  const recommendedMovie: MovieData[] = await response.json();

  return (
    <div className="flex gap-3 mt-2">
      {recommendedMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
