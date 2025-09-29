import { BookData } from "@/types";
import Link from "next/link";
import style from "./book-items.module.css";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      {/* <img> 라인에 경고가 뜬다면, 넥스트의 이미지 최적화 기능을 이용하지 않고 img 태그를 이용하도록 설정했기 때문 */}
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
