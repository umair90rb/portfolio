import DownloadIcon from '../assets/download.svg?react';
import GithubIcon from '../assets/github.svg?react';
import LinkedInIcon from '../assets/linkedin.svg?react';
import ThemeSwitcher from './theme-switcher';

// interface NavbarProps {
//   currentPage: string;
//   navigate: (state: string) => void;
// }

// export default function Navbar({ currentPage, navigate }: NavbarProps) {
export default function Navbar() {
  // const links = [
  // { url: '/projects', title: 'Projects' },
  // { url: '/me', title: 'Me' },
  // { url: '/contact-me', title: 'Contact Me' },
  // ];

  // const isActive = (url: string) => currentPage === url;

  return (
    <div className="flex items-center justify-between shadow-xl dark:bg-neutral-800 h-20">
      <div className="flex items-center gap-2 ml-3 direct-row">
        <a
          className="dark:bg-white rounded-full transition duration-250 hover:rotate-15"
          href="https://github.com/umair90rb"
          target="_blank"
        >
          <GithubIcon width={50} height={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/umair90rb"
          target="_blank"
          className="bg-white rounded-full transition duration-500 hover:rotate-15"
        >
          <LinkedInIcon width={50} height={50} />
        </a>
      </div>

      <div className="shadow-xl dark:bg-neutral-700 rounded-full w-fit  gap-1 flex items-center justify-center">
        {/* {links.map(({ url, title }, index) => ( */}
        <a
          className={`transition duration-500 hover:bg-gray-200 hover:dark:bg-neutral-600 dark:text-white text-center text-bold rounded-full px-4 py-3 flex flex-row justify-center items-center`}
          // isActive(url) && 'bg-neutral-600'
          // key={index}
          // onClick={() => navigate(url)}
          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1aGGiZsWtf6T14AY5vWSRiflPNOXyYBDemjwWtQ2Hc5I/export?format=pdf"
          target="_blank"
        >
          {/* {title} */}
          Resume &nbsp;
          <DownloadIcon stroke="currentColor" width={20} height={20} />
        </a>
        {/* ))} */}
      </div>
      {/* <button className="bg-white rounded-full transition duration-250 hover:rotate-15 mr-3">
        <ThemeSwitchIcon width={50} height={50} />
      </button> */}
      <ThemeSwitcher />
    </div>
  );
}
