import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";

export function Footer() {
  return (
        <div className={"border-t text-center border-gray-300 p-2"}>
            <div className={"text-xl font-medium text-accent-a"}>
                Connect with me
            </div>
            <div className={"flex flex-row justify-center gap-3 mt-2"}>
                <a href={"https://www.linkedin.com/in/gabriel-goulis-0509ab166/"}>
                    <button>
                        <SiLinkedin size={"34"} style={{ color: '#0e76a8' }}/>
                    </button>
                </a>
                <a href={"https://github.com/g-goulis"}>
                    <button>
                        <SiGithub size={"34"} />
                    </button>
                </a>
                <a href={"https://scholar.google.com/citations?user=7l49DR8AAAAJ"}>
                    <button>
                        <SiGooglescholar size={"34"} />
                    </button>
                </a>
            </div>
        </div>
  );
}

export default Footer;
