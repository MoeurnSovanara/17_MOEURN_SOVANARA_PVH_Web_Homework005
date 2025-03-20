"use client"
import { Button } from "@heroui/button";

import { usePathname } from "next/navigation"

export default function MenuLink(){
    const pathname =usePathname();
    return(
        <Button className="rounded-full bg-[#F5F7F8] text-[20px] text-[#087E8B] h-16 w-auto px-10">
        {
            pathname==="/home"? "Home Page" : pathname === "/cartoon-category"?"Old School Categories":pathname === "/book-category"?"All Books":"Warnings"
        }

        </Button>
    )
}