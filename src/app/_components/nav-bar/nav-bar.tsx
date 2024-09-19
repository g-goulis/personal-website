import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ScienceIcon from '@mui/icons-material/Science';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import {NavbarItem} from "@/app/_components/nav-bar/nav-bar-item";
import {HoverColor} from "@/interfaces/HoverColor";


export function Navbar() {

    return (
        <div className="flex items-center justify-between mx-2">

            <NavbarItem hoverColor={HoverColor.RED} href={"/"}>
                <HomeIcon className={"text-5xl"}/>
            </NavbarItem>

            <div className={"flex flex-row"}>
                <div className="flex flex-row items-center gap-7 border-r-4 content-end pr-5">
                    <NavbarItem hoverColor={HoverColor.ORANGE} href={"/aboutme"} title={"About Me"}>
                        <EmojiPeopleIcon className={"text-3xl"}/>
                    </NavbarItem>
                    <NavbarItem hoverColor={HoverColor.YELLOW} href={"/research"} title={"Research"}>
                        <ScienceIcon className={"text-3xl"}/>
                    </NavbarItem>
                    <NavbarItem hoverColor={HoverColor.BLUE} href={"/blog"} title={"Blog"}>
                        <ChatIcon className={"text-3xl"}/>
                    </NavbarItem>
                </div>
                <div className="flex pl-5">
                    <NavbarItem hoverColor={HoverColor.GREEN}
                                href={"mailto:ggoulis@arizona.edu?subject=Hello%20There&body=Hi,%20I%20wanted%20to%20reach%20out!"}
                                title={"Contact"}
                    >
                        <MailIcon className={"text-3xl"}/>
                    </NavbarItem>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
