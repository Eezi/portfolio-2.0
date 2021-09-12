import React, { FC, ReactElement } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import BottomNavbar from '../BottomNavBar'

const Header: FC<{}> = (): ReactElement => {
    return (
      <div>
  <div className="hidden md:block">
<header className="flex flex-row justify-between items-center space-x-4 bg-gray-800 py-6 px-6">
  <Link to="/">
    <h5 className="text-green-300 text-xl font-mono">Tomi Salo</h5>
  </Link>
  <nav className="flex flex-row space-x-6 font-semibold">
    <Link to="/about" className="text-green-300 hover:underline font-mono">About</Link>
    <Link to="/about" className="text-green-300 hover:underline font-mono">Blog</Link>
    <Link to="/projects" className="text-green-300 hover:underline font-mono">Projects</Link>
  </nav>
</header>
</div>
  <BottomNavbar />
</div>
);
}

export default Header