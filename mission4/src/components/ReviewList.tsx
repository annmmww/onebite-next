import { ReviewData } from "@/src/type";
import ReviewItem from "./ReviewItem";

export async function ReviewList({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`, {next: { tags: [`review-${movieId}`]}}
  );

  if (!response.ok) {
    return <div>리뷰를 불러오지 못했습니다.</div>;
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section className="flex flex-col gap-4">
      {reviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </section>
  );
}
