"use client"
import React from 'react';
import Link from 'next/link';
import {useAuth} from "@/providers/auth-context";

const links = [
    {href: '/', label: 'Home'},
    {href: '/experience', label: 'Experience'},
    {href: '/projects', label: 'Projects'},
    {href: '/blog', label: 'Blog'},
    {href: '/contact', label: 'Contact'},
]

function Navbar() {
    const {isAuthenticated} = useAuth()
    return (
        <>
        {isAuthenticated && (
        <strong className={'absolute top-5 left-5 text-xl'}>AUTHENTICATED</strong>)}
        <nav className={'w-fit fixed top-4 left-1/2 -translate-x-1/2 rounded-3xl border z-20 bg-background shadow'}>
            <ul className={'flex gap-3 p-3 px-5'}>
                {
                    links.map(link => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>)
                    )
                }
            </ul>
        </nav>
    </>
    )
}

export default Navbar;
