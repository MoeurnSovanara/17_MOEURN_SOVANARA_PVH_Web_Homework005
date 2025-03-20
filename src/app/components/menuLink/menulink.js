"use client"
import { Button } from "@heroui/button";

import DropDownButton from "../cards/dropDownButton";

import { usePathname } from "next/navigation"

export default function MenuLink(){

    const pathname =usePathname();
    return(
        <Button className="rounded-full bg-[#F5F7F8] text-[20px] text-[#087E8B] h-16 w-auto px-10">
        {
            pathname==="/home"?
            <div>
                <p className="text-[20px] text-slate-700 font-bold opacity-60">Home Page</p> 
            </div>
            : 
            pathname === "/cartoon-category"?
            <div>
                <p className="text-[20px] text-slate-700 font-bold opacity-60">Old School Category</p>
            </div>
            :
            pathname === "/book-category"?
            <div>
                <p className="text-[20px] text-slate-700 font-bold opacity-60">All Books</p>
            </div>
            :""
        }

        </Button>
    )
}