import React from "react";
import { Link } from "react-router-dom";
import Logo from './../../logo.png';
import './header.component.css';

const Header = () => {
    return (
        <div className="header px-5">
            {/* Logo here */}
            <div>
                <a className="flex items-center" href="/"><img src={Logo} alt="Logo" /><h1 className="text-xl font-bold">Library <br/>Management</h1></a>
            </div>
            {/* Links here */}
            <ul>
                <li><Link to="/signin" className="text-indigo-600 hover:text-indigo-500">Sign in</Link></li>
                <li><Link to="/signup" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up </Link></li>
                <li><Link to="/newbook" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">New Book</Link></li>
                <li><Link to="/memberList" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Member List</Link></li>
            </ul>
        </div>
    )
}

export default Header;


