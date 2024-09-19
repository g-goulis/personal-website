import CoverImage from "./cover-image";
import DateFormatter from "../date-formatter";
import { PostTitle } from "@/app/_components/post/post-title";

type Props = {
    children?: React.ReactNode;
};

export function PostContainer({ children }: Props) {
    return (
        <div className={"mx-10"}>
            {children}
        </div>
    );
}
