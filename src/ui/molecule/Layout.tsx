import Navbar from "atom/Navbar";
import Head from "next/head";
import React, {ReactNode} from "react";

interface IProps {
    children?: ReactNode;
    title?: string;
}

const Layout = ({children, title = "Analýza rizik"}: IProps) => (
    <div className="flex flex-col min-h-screen">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <Navbar />
        </header>
        <main className="relative w-full flex-1 px-5 pb-5 bg-gray-50 sm:px-10 md:px-16 lg:px-32 xl:px-60 text-gray-800">
            {children}
        </main>
    </div>
);

export default Layout;
