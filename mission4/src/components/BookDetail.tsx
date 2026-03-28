import Image from "next/image";
import { MovieData } from "@/src/type";
import { notFound } from "next/navigation";

export default async function BookDetail({ id }: { id: string }) {
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
    <div className="flex flex-col gap-5">
      <div
        className="relative flex h-100 w-full justify-center overflow-hidden bg-cover bg-center bg-no-repeat p-5"
        style={{
          backgroundImage: `url('${posterImgUrl}')`,
        }}
      >
        <Image
          src={posterImgUrl}
          alt={title}
          width={180}
          height={250}
          className="z-10 w-62 h-87.5"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">{title}</div>
        <div>
          <div className="text-gray-500">
            {releaseDate} / {genres.join(", ")} / {runtime}분
          </div>
          <div className="text-gray-500">{company}</div>
        </div>
        <div>{subTitle}</div>
      </div>
      <div className="bg-gray-200 p-4">{description}</div>
    </div>
  );
}
