import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import styles from "./[id].module.css";
import fetchOneMovie from "@/lib/fetch-one-movie";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "12" } },
      { params: { id: "13" } },
      { params: { id: "14" } },
      { params: { id: "15" } },
      { params: { id: "16" } },
      { params: { id: "17" } },
      { params: { id: "18" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
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
        <div>로딩중...</div>
      </>
    );
  }
  if (!movie) return "관리자에게 문의하세요.";

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
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={styles.container}>
        <div
          className={styles.cover_img_container}
          style={{
            backgroundImage: `url('${posterImgUrl}')`,
          }}
        >
          <img src={posterImgUrl} />
        </div>
        <div className={styles.title}>{title}</div>
        <div>
          {releaseDate} / {genres.join(", ")} / {runtime}분
        </div>
        <div>{company}</div>
        <div>{subTitle}</div>
        <div>{description}</div>
      </div>
    </>
  );
}
