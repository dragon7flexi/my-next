'use client';

import { hasExternalOtelApiPackage } from "next/dist/build/webpack-config";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function BooksLayout({ children }) {
    const router = useRouter();
    const txtKeyword = useRef(null);

    const handleSearch = () => {
        router.push(`/books/${textKeyword.current.value}`);
    };

    return (
        <>
        <form className="mt-2 mb-4">
            <input 
                type="text"
                ref={txtKeyword}
                className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:ouline-none"
            />
            <button
                type="button"
                onClick={handleSearch}
                className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500"
            >検索</button>
        </form>
        <hr/>
        {children}
        </>
    );
}