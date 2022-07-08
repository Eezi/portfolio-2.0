import React, { FC, ReactElement } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import BottomNavbar from '../BottomNavBar';
import { Darkmode } from './Darkmode';

interface Props {
  setDarkMode: (isDark: boolean) => void;
  darkMode: boolean;
}

const Header: FC<Props> = ({ setDarkMode, darkMode }): ReactElement => {
  return (
    <div>
      <div className="hidden md:block">
        <header className="flex flex-row justify-between items-center space-x-4 bg-white dark:bg-mainBg py-6 px-6">
          <Link to="/">{/* Own logo here */}</Link>
          <nav className="flex dark:text-primary  flex-row space-x-6 font-semibold">
            <Link to="/" className="hover:underline font-mono">
              Home
            </Link>
            <Link to="/blog" className="hover:underline font-mono">
              Blog
            </Link>
            <Link to="/projects" className="hover:underline font-mono">
              Projects
            </Link>
            <Darkmode isDark={darkMode} setDarkMode={setDarkMode} />
          </nav>
        </header>
      </div>
      <div
        className="md:invisible"
        style={{ marginLeft: '2rem', paddingTop: '1.5rem' }}
      >
        <Darkmode isDark={darkMode} setDarkMode={setDarkMode} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Header;
