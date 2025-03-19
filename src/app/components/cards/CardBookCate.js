import Image from "next/image"
import { Button } from "@heroui/button";
import Link from "next/link";
export default function CardCategory ({items}){
    return(
        <div className="col-span-6 h-[300px] bg-[#F5F7F8] rounded-large relative mt-52">
            <div className="grid grid-cols-12 h-full">
                <div className="w-52 absolute left-10 top-[-150px] ">
                    <Image src={`${items.image}`} width={176} height={221} className="rounded-[30px] border w-full"/>
                </div>
                <div className="col-span-5 flex items-center justify-center mt-32">
                    <Link href={`/books/${items.id}`}>
                        <Button className="rounded-full mt-3 font-bold w-60 h-14 text-[#0B3954] text-[20px]">READ FULL ARTICLE</Button>
                    </Link>
                    
                </div>
                <div className="col-span-7 pr-10 py-10">
                    <h1 className="font-bold text-[25px] text-[#0B3954]">{items.book_title}</h1>
                    <p className="text-[20px] leading-10 text-[#0B3954] line-clamp-5">{items.description}</p>
                </div>
            </div>
        </div>
    )
}