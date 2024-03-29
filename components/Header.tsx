import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className="navbar bg-base-100 fixed z-30 top-0">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="#hero">Home</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
            </div>
            <Link href="/" className="normal-case text-xl text-primary font-bold">PORTFOLIO</Link>
        </div>
        <div className=" hidden lg:flex navbar-end">
            <ul className="menu menu-horizontal px-1 font-medium">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Header