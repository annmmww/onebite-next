"use client";

import createReviewAction from "@/src/actions/create-review.action";
import { useActionState, useEffect } from "react";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className="flex flex-col gap-2" action={formAction}>
        <input name="movieId" value={movieId} hidden readOnly />
        <textarea
          disabled={isPending}
          className="w-full border border-gray-300 rounded-md p-2"
          name="content"
          placeholder="리뷰를 작성해주세요"
        />
        <div className="flex justify-end gap-2">
          <input
            disabled={isPending}
            className="border border-gray-300 rounded-md p-2"
            name="author"
            placeholder="작성자"
          />
          <button
            disabled={isPending}
            className="w-30 bg-yellow-500 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            {isPending ? "등록중..." : "등록"}
          </button>
        </div>
      </form>
    </section>
  );
}
