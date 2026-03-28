import MoviePage from "@/src/app/movie/[id]/page";
import Modal from "@/src/components/modal";

export default function Page(props: any) {
  return (
    <div>
      가로채기 성공!
      <Modal>
        <MoviePage {...props} />
      </Modal>
    </div>
  );
}
