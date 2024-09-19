import {IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
        <div className={"border-t text-center border-gray-300 p-2"}>
            <div className={"text-xl font-medium text-accent-a"}>
                Connect with me
            </div>
            <div>
                <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/gabriel-goulis-0509ab166/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    sx={{ color: '#0e76a8' }}
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://github.com/g-goulis"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                    sx={{ color: 'black' }}
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
  );
}

export default Footer;
