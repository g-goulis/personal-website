import Link from 'next/link';

type Props = {
    href: string;
    title: string;
};

export function NavbarItem({href, title}: Props) {
    return (
        <div>
            <Link href={href} className="text-white hover:bg-white hover:text-accent-a block px-3 py-2 rounded-md text-base font-medium">
                {title}
            </Link>
        </div>
    );
}

