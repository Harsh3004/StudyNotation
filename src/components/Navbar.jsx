import React, { useContext, useState } from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { loginContext } from '../App'

const Navbar = () => {
    const user = useContext(loginContext);
    const isLoggedIn = user.isLoggedIn;
  return (
    <div className='w-screen h-screen flex flex-col bg-slate-900'>
        <div className='w-11/12 max-w-[1160px] flex items-center justify-between mx-auto py-4'>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt="Logo" height={32} width={160} loading='lazy'/>
                </NavLink>
            </div>

            <nav>
                <ul className='flex gap-x-6 text-slate-100'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4 text-slate-100'>
                {
                    !isLoggedIn && (
                    <NavLink to='login'>
                        <button className='bg-slate-800 py-[8px] px-[12px] rounded-sm border border-slate-700'>Log in</button>
                    </NavLink>
                    )
                }
                {
                    !isLoggedIn && (
                        <NavLink to='signup'>
                            <button className='bg-slate-800 py-[8px] px-[12px] rounded-sm border border-slate-700'>Sign up</button>
                        </NavLink>
                    ) 
                }
                {
                    isLoggedIn && (
                        <NavLink to='/'>
                            <button className='bg-slate-800 py-[8px] px-[12px] rounded-sm border border-slate-700' onClick={
                                setLoggedIn(false)
                            }>Log out</button>
                        </NavLink>
                    )
                }
                {
                    isLoggedIn && (
                        <NavLink to='dashboard'>
                            <button className='bg-slate-800 py-[8px] px-[12px] rounded-sm border border-slate-700'>Dashboard</button>
                        </NavLink>
                    )
                }
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar