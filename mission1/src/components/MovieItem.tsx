import { MovieType } from "@/type";
import styles from "./MovieItem.module.css";
import Link from "next/link";

export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}: MovieType) {
  return (
    <div>
      <Link href={`/movie/${id}`}>
        <img className={styles.img} src={posterImgUrl} alt={title} />
      </Link>
    </div>
  );
}
