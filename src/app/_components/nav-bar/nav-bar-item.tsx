"use client";

import Link from 'next/link';
import {usePathname} from "next/navigation";
import {HoverColor} from "@/interfaces/HoverColor";


type Props = {
    href: string;
    title?: string;
    hoverColor: HoverColor;
    children: React.ReactNode;
};

export function NavbarItem({href, title, hoverColor, children}: Props) {
    const pathname = usePathname();

    // Function to check if the current route matches the link
    const isActive: boolean = href === pathname;

    // Map HoverColor enum values to actual Tailwind classes
    const hoverClassMap: { [key in HoverColor]: string } = {
        [HoverColor.RED]: 'hover:text-red-400',
        [HoverColor.ORANGE]: 'hover:text-orange-300',
        [HoverColor.YELLOW]: 'hover:text-yellow-300',
        [HoverColor.BLUE]: 'hover:text-blue-300',
        [HoverColor.GREEN]: 'hover:text-green-300'
    };

    // If the provided hoverColor is valid, use the mapped class, otherwise fallback
    const hoverClass = hoverClassMap[hoverColor];

    return (
        <Link href={href}>
            <div className={`flex flex-col items-center relative text-gray-500 font-semibold ${hoverClass} ${isActive && 'border-b-2'}`}>
                <div className={"relative"}>
                    {children}
                </div>
                <span className={"mt-1"}>
                    {title ? <p className={"text-sm"}>{title}</p> : null}
                </span>
            </div>
        </Link>
    );
}

