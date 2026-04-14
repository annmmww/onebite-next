import MoviePage from "@/src/app/movie/[id]/page";

export default function Page(props: any) {
  return (
    <div>
      가로채기 성공!!
      <MoviePage {...props} />
    </div>
  );
}
