import Link from 'next/link';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ScienceIcon from '@mui/icons-material/Science';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import {NavbarItem} from "@/app/_components/nav-bar-item";
export function Navbar() {
    return (
        <div className="flex items-center justify-between px-2">
            <Link className={"text-gray-500 font-semibold hover:text-red-400"} href={"/aboutme"}>
                <HomeIcon className={"h-5 w-5 mr-1 align-middle"}/>
                <span className="align-middle">Home</span>
            </Link>
            <div className="text-accent-a flex items-center space-x-4 justify-end">
                <NavbarItem hoverColor={"text-orange-400"} href={"/aboutme"} title={"About Me"}>
                    <EmojiPeopleIcon className={"h-5 w-5 mr-1 align-middle"}/>
                </NavbarItem>
                <NavbarItem hoverColor={"text-yellow-400"} href={"/research"} title={"Research"}>
                    <ScienceIcon className={"h-5 w-5 mr-1 align-middle"}/>
                </NavbarItem>
                <NavbarItem hoverColor={"text-green-500"} href={"/blog"} title={"Blog"}>
                    <ChatIcon className={"h-5 w-5 mr-1 align-middle"} />
                </NavbarItem>
                <div className="border-l-4 border-gray-500 h-5"/>
                <NavbarItem hoverColor={"text-blue-300"} href={"mailto:ggoulis@arizona.edu?subject=Hello%20There&body=Hi,%20I%20wanted%20to%20reach%20out!"}>
                    <MailIcon className={"h-6 w-6 mr-1 align-middle"}/>
                </NavbarItem>
            </div>
        </div>
    );
}

export default Navbar;
