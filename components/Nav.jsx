"use client";
// This is a client component
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];
export default function Nav() {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index}
                        className={`${link.path === pathName && "text-accent border-b-2 border-accent "} 
                        capitalize font-semibold text-medium transition-all duration-300 ease-in-out hover:text-accent`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav >
    )
}
