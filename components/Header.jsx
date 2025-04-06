import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link'
import Nav from './Nav'
export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        QHuyyyyy<span className="text-accent">.</span>
                    </h1>
                </Link>

                { /* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className='ml-auto'>Hire me</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
