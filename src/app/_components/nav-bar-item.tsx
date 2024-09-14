import Link from 'next/link';
import ScienceIcon from "@mui/icons-material/Science";

type Props = {
    href: string;
    title?: string;
    hoverColor: string;
    children: React.ReactNode;
};

export function NavbarItem({href, title, hoverColor, children}: Props) {
    return (
        <div>
            <Link href={href} className={`text-gray-500 font-semibold hover:${hoverColor}`}>
                {children}
                {title ? <span className="align-middle">{title}</span> : null}
            </Link>
        </div>
    );
}

