import { useState } from 'react';

export default function Navbar() {

    const navItems = ["Home", "About", "Services", "Contact"];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="w-full h-20 bg-custom-gray flex items-center justify-between px-10">

                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        <h1 className="text-white text-[2.5rem] font-bold max-sm:text-[2rem]">WebTools</h1>
                    </div>
                    
                    <ul className="flex space-x-8 text-white text-lg font-semibold max-sm:hidden">
                        {navItems.map((item) => (
                            <li key={item} className="relative group cursor-pointer">
                                <span>{item}</span>
                                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-200 transform -translate-x-1/2 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    <button className="sm:hidden text-white text-3xl cursor-pointer" onClick = {() => setIsOpen(!isOpen)}>
                        &#9776;
                    </button>

                    <ul className={`sm:hidden absolute top-20 left-0 w-full bg-custom-gray2 text-center text-white text-lg font-semibold overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>   
                        {navItems.map((item) => (
                        <li key={item} className="cursor-pointer px-6 py-2">
                            {item}
                        </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}