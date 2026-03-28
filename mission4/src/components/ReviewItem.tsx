import { ReviewData } from "../type";
import ReviewItemDeleteButton from "./reviewItemDeleteButton";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className="flex flex-col gap-2">
      <div>{author}</div>
      <div className="bg-yellow-100 rounded-2xl p-4">{content}</div>
      <div className="flex gap-2 text-gray-500">
        <div>{new Date(createdAt).toLocaleString()}</div>
        <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
      </div>
    </div>
  );
}
