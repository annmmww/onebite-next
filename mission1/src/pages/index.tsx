import styles from "./Home.module.css";
import moviesData from "@/mock/movies.json";
import MovieItem from "@/components/MovieItem";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  const recommendedmovies = moviesData.slice(0, 3);
  const allMovies = moviesData.slice(0, 5);

  return (
    <div>
      <main>
        <section>
          <h3>지금 추천하는 영화</h3>
          <div className={styles.movieList}>
            {recommendedmovies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          <div className={styles.movieList}>
            {allMovies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}