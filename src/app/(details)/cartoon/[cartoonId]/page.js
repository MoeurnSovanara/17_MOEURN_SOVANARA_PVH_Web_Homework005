import Link from "next/link"
import Image from "next/image"
import home from "/public/icon/home.png"
import bookOpen from "/public/icon/bookOpen.png"
import school from "/public/icon/school_cartoon.png"
import playCircle from "/public/icon/playCircle.png"
import arrowRight from "/public/icon/arrowRight.png"
import GetCartoonById from "../../../../../services/getcartoonId"
import eye from "/public/icon/eye.png"
export default async function CartoonDetailPage({params}) {
    const paramId = (await params).cartoonId;
    
    console.log("Id from param : ",paramId);
    
    const cartoonById = await GetCartoonById(paramId)
    return(
        <div className="bg-slate-100 w-full h-screen  p-10 overflow-auto relative">
            <div className="w-[80%] h-[15%] m-auto">
                <ul>
                    <li>
                        <Link href={"/home"} className="text-[30px] font-bold"><Image src={home} className="inline-block w-8 mr-2 mb-2"/>Home</Link>
                        <Image src={arrowRight} className="inline-block w-8 mb-3 mx-3 "/>
                        <Link href={"/cartoon-category"} className="text-[30px] font-bold"><Image src={school} className="inline-block w-8 mr-2 mb-2"/>Old-School Cartoons</Link>
                        <Image src={arrowRight} className="inline-block mb-3 w-8 mx-3"/>
                        <Link href={""} className="text-[30px] font-bold"><Image src={playCircle} className="inline-block w-8 mr-2 mb-2"/>The Hidden Treasure</Link>
                    </li>
                </ul>
            </div>
            <div className="bg-white w-[80%] h-auto m-auto rounded-[30px]">
                <div className="absolute top-[50px] right-[300px]">
                    <Image width={301} height={407} src={cartoonById.image} className="rounded-[40px]"/>
                </div>
                <div className="p-20">
                    <h1 className="pt-44 text-[30px] font-bold">{cartoonById.ct_title}</h1>
                    <p className="text-[27px] py-4">By <p className="inline-block text-[#087E8B]">{cartoonById.ct_creator}</p></p>
                    <p className="text-[24px] pb-3 text-[#087E8B]"><Image src={eye} className="inline-block mb-2"/> {cartoonById.view_count} | {cartoonById.published_year} </p>
                    <p className="text-[20px]">{cartoonById.ct_description}</p>
                </div>
                
            </div>
        </div>
    )
    
}