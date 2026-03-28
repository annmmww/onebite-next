import { MovieData } from "@/src/type";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: "force-cache",
  });

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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`,
    { cache: "force-cache" },
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다~</div>;
  }

  const movie: MovieData = await response.json();

  const {
    title,
    posterImgUrl,
    releaseDate,
    genres,
    runtime,
    company,
    subTitle,
    description,
  } = movie;

  return (
    <main className="flex flex-col gap-5">
      <div
        className="relative flex h-87.5 w-full justify-center overflow-hidden bg-cover bg-center bg-no-repeat p-5"
        style={{
          backgroundImage: `url('${posterImgUrl}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <Image
          src={posterImgUrl}
          alt={title}
          width={180}
          height={250}
          className="z-10 h-full"
        />
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <div>
        {releaseDate} / {genres.join(", ")} / {runtime}분
      </div>
      <div>{company}</div>
      <div>{subTitle}</div>
      <div>{description}</div>
    </main>
  );
}
