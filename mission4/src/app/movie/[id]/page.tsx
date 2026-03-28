import { MovieData } from "@/src/type";
import BookDetail from "@/src/components/BookDetail";
import ReviewEditor from "@/src/components/ReviewEditor";
import { ReviewList } from "@/src/components/ReviewList";

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {
      cache: "force-cache",
    },
  );

  if (!response.ok) {
    return [];
  }

  const movies: MovieData[] = await response.json();

  return movies.map((movie) => ({
    id: String(movie.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-5 mt-4">
      <BookDetail id={id} />
      <ReviewEditor movieId={id} />
      <ReviewList movieId={id} />
    </div>
  );
}
