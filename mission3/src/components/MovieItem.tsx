import Image from "next/image";
import Link from "next/link";
import { MovieData } from "../type";

export default function MovieItem({ id, posterImgUrl }: MovieData) {
  return (
    <div className="shrink-0">
      <Link href={`/movie/${id}`}>
        <Image
          src={posterImgUrl}
          alt="영화포스터"
          width={180}
          height={250}
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
}
