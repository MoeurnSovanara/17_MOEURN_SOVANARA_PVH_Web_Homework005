import Image from "next/image"
import Link from "next/link"

import eye from "/public/icon/eye.png"
import { delay } from "framer-motion"

export default function CartoonCategory({items}){
    return (
        <div className="col-span-4 rounded-large relative mt-16">
            <Link href={`/cartoon/${items.id}`}>
                <div className="place-self-center pr-28 h-[500px] w-full flex align-middle">
                        <Image src={`${items.image}`} width={404} height={398} alt="Cartoon Category" className="rounded-[40px] ml-[75px]"/>
                </div>
                <div className=" w-[314px] ml-[75px]">
                    <h1 className="font-bold text-[30px] text-[#0B3954] pr-10">{items.ct_title}</h1>
                    <p className="text-[20px] font-bold opacity-60"><Image src={eye} className="inline-block mb-2"/> {items.view_count} times | {items.published_year} </p>
                </div>
            </Link>
        </div>
    )
}