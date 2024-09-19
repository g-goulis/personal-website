import Avatar from "../avatar";
import CoverImage from "./cover-image";
import DateFormatter from "../date-formatter";
import { PostTitle } from "@/app/_components/post/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg divider">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
