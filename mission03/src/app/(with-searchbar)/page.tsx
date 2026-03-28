import MovieItem from "@/src/components/MovieItem";
import { MovieData } from "../../type";

async function AllMovie() {
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

async function RecommendedMovie() {
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

export default async function Home() {
  return (
    <div>
      <main className="flex flex-col gap-6">
        <section>
          <h3 className="font-bold text-xl">지금 추천하는 영화</h3>
          <RecommendedMovie />
        </section>
        <section>
          <h3 className="font-bold text-xl">등록된 모든 영화</h3>
          <AllMovie />
        </section>
      </main>
    </div>
  );
}
