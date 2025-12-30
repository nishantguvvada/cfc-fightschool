import { useState } from "react";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);



    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="relative top-0 left-0 mt-2">
                <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto text-white shadow-md rounded-md lg:px-8 lg:py-3">
                    <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                        <a href="/" className="mr-4 block cursor-pointer py-1.5 text-base text-slate-700 font-semibold hover:text-[#acfcc3ff] transition delay-300 duration-300 ease-in-out dark:text-teal-50">
                            fightschool
                        </a>
                        <div className="hidden md:block">
                            <ul className="flex flex-col gap-2 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
                                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 dark:text-stone-50">
                                    <a href="#" className="flex items-center">
                                        Already have an account?
                                    </a>
                                </li>
                                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                    <a href="#" className="shadow-md rounded-md font-medium px-4 py-2.5 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-[#acfcc3ff] dark:bg-stone-50 dark:text-slate-600">Login</a>
                                </li>
                            </ul>
                        </div>
                        <button onClick={handleClick} className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden" type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-stone-100" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={`${ isOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}`}></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className={`${ !isOpen ? "hidden" : "block"} flex flex-row justify-center items-center md:hidden`}>
                        <ul className="flex flex-col justify-center items-center gap-2 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 dark:text-stone-50">
                                <a href="#" className="flex items-center">
                                    Already have an account?
                                </a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <a href="#" className="flex items-center dark:text-stone-100">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}