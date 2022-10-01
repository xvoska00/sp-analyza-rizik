import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-900 px-5 py-4 sm:px-10 md:px-16 lg:px-32 xl:px-60">
            <Link href="/">
                <a className="text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">Analýza rizik</a>
            </Link>
        </nav>
    );
};

export default Navbar;
