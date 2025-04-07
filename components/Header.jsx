import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav';
export default function Header() {
    return (
        <header className="py-8 xl:py-5 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        <span className="text-accent">&lt;</span>QHuyyyyy<span className="text-accent">/&gt;</span>
                    </h1>
                </Link>

                { /* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className='ml-auto'>Hire me</Button>
                    </Link>
                </div>
                { /* desktop nav */}
                <div className=" xl:hidden ">
                    <MobileNav />

                </div>
            </div>
        </header>
    )
}
