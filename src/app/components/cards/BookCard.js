import { Card, CardHeader, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import bookCard from "/public/card-image/bookCard.png";
import tag from "/public/icon/tag-2.png";

export default function BookCard() {
  return (
    <Link href="/book-category" className="relative group block">
      {/* Floating Button */}
      <div className="absolute z-10 left-5 top-5">
        <Button className="rounded-full text-[#087E8B] text-[20px] font-bold flex items-center gap-2 hover:bg-[#E0F7FA]">
          <Image src={tag} className="w-5" alt="Tag Icon" />
          Book
        </Button>
      </div>

      {/* Card Image */}
      <div className="relative w-full h-full">
        <Image src={bookCard} className="w-full h-full object-cover" alt="Cartoon Card" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[50px] mb-2 w-[97%] ml-1 flex items-center justify-center text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <div className="text-[40px] font-bold p-14 text-center leading-[60px]">
            View All Available Books
           </div>
        </div>
      </div>
    </Link>
  );
}
