    "use client"
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export function Navbar () {
    const [DropDown, setDropDown] = useState(false);
    const toggleDropDown = () => {
        setDropDown(!DropDown)
    }

    return (
        <main className="bg-white shadow shadow-gay-300 w-full">
            <div className="flex justify-between h-[50px] pt-3 px-5"> 
                <p className="text-blue-500 font-bold text-2xl">Rentify</p>
                <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/tenant-form"><li>Tenant-Form</li></Link>
                    <li>Rent-List</li>
                </ul>
                <div className="hidden md:flex gap-3">
                   <Link href="/auth/login"><p className="w-[60px] h-[30px] bg-blue-500 py-2 text-white flex justify-center items-center rounded">Login</p></Link>
                    <Link href="/dashboard/profile"><CgProfile className="text-2xl"/></Link>
                </div>
                <div>
                    <RxHamburgerMenu onClick={toggleDropDown} className="text-blue-500 text-3xl" />
                </div>
               
            </div>
             {DropDown && (

            <div className="px-5 pb-1 md:hidden">
                <ul>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/tenant-form"><li>Add-Rent</li></Link>
                    <li>Rent-list</li>
                    <Link href="/auth/login"><p className="w-[60px] h-[30px] bg-blue-50lex justify-center items-center rounded">Login</p></Link><p className="w-[60px] h-[30px] bg-blue-50lex justify-center items-center rounded">Login</p>
                    <Link href="/dashboard/profile"><CgProfile className="text-2xl"/></Link>

                </ul>
            </div> )}
        </main>
    )
};