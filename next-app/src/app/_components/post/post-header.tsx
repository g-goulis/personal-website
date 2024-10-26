import {format, parseISO} from "date-fns";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, date }: Props) {
    const formattedDate = format(parseISO(date), "LLLL	d, yyyy");

    return (
    <div>
      <h1 className={"font-montserrat font-bold text-7xl"}>{title}</h1>
      <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-lg divider">
              {formattedDate}
          </div>
      </div>
    </div>
  );
}
