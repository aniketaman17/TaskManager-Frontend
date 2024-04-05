import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import "./header.css"
function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);
    console.log("user", user);
    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/";
    }

    return (
        <div>
            <nav className='header bg-slate-200 flex justify-between items-center'>
            <a href="/" className="lg:w-[150px] font-burtons w-[100px] bg-black  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:from-[#0000] before:to-[rgb(104,100,228)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">TASK MANAGER</a>

                <div className='flex justify-between'>
                    {
                        token ? (
                            <div className='flex items-center justify-center'>
                                <p className='mr-5'>welcome, <span className=' text-xl text-purple-700 font-bold capitalize'>{user.name}</span></p>
                                <button className="lg:w-[150px] font-burtons w-[100px] bg-black  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:from-[#0000] before:to-[rgb(104,100,228)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" onClick={logout} >Logout</button>
                            </div>
                        ) : (
                            <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                                <li >
                                    <NavLink className='rounded-xl bg-black text-white p-2 ' to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink className='rounded-xl bg-black text-white p-2' to="/register">Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;