"use client";
import React, { useState } from 'react'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'

const links = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='flex items-center justify-center '>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <h1 className='text-4xl font-semibold'>
                            <span className="text-accent">&lt;</span>QHuyyyyy<span className="text-accent">/&gt;</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8 text-center">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className={`capitalize font-semibold text-xl transition-all duration-300 ease-in-out hover:text-accent ${link.path === usePathname() && "text-accent border-b-2 border-accent"}`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
