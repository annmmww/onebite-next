import MovieItem from "@/components/MovieItem";
import styles from "./search.module.css";
import { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import fetchMovie from "@/lib/fetch-all-movie";
import { useRouter } from "next/router";
import { MovieType } from "@/type";
import Head from "next/head";

export default function Page() {
  const router = useRouter();
  const q = router.query.q;

  const [movie, setMovie] = useState<MovieType[]>([]);

  const fetchSearchMovie = async () => {
    const data = await fetchMovie(q as string);
    setMovie(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchMovie();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>한입영화</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입영화" />
        <meta
          property="og:description"
          content="한입영화를 통해 지금 보실 영화를 만나보세요!"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.movieList}>
          {movie.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
