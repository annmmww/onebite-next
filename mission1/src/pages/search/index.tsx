import MovieItem from "@/components/MovieItem";
import moviesData from "@/mock/movies.json";
import styles from "./search.module.css";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";

export default function page() {
  const router = useRouter();
  const allMovies = moviesData;

  const onClickMovie = (id: number) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.movieList}>
        {allMovies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
