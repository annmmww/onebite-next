import styles from "./Home.module.css";
import MovieItem from "@/components/MovieItem";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import fetchMovie from "../lib/fetch-all-movie";
import fetchRandomMovie from "../lib/fetch-random-movie";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = async () => {
  const [allMovie, recoMovie] = await Promise.all([
    fetchMovie(),
    fetchRandomMovie(),
  ]);

  return {
    props: {
      allMovie,
      recoMovie,
    },
    revalidate: 3,
  };
};

export default function Home({
  allMovie,
  recoMovie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div>
        <main className={styles.main}>
          <section>
            <h3>지금 추천하는 영화</h3>
            <div className={styles.movieList}>
              {recoMovie.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
              ))}
            </div>
          </section>
          <section>
            <h3>등록된 모든 영화</h3>
            <div className={styles.movieList}>
              {allMovie.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
