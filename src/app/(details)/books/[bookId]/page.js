import Image from "next/image"
import image from "/public/card-image/image.png"
import GetBookById from "../../../../../services/getbookId";
import Link from "next/link";
import home from "/public/icon/home.png"
import arrowRight from "/public//icon/arrowRight.png"
import book from "/public/icon/book.png"
import bookOpen from "/public/icon/bookOpen.png"
export default async function BookDetailPage({params}){

    const paramId = (await params).bookId;

    console.log("Id from param : ",paramId);

    const bookById = await GetBookById(paramId)
    // const bookDetail = await GetBookById();
    // const getBookDetails = await bookDetail.payload;
    // console.log(getBookDetails);
    
    return (
        <div className="bg-slate-100 w-full h-screen p-10 overflow-auto relative">
            <div className="w-[80%] h-[15%] m-auto">
                <ul>
                    <li>
                        <Link href={"/home"} className="text-[30px] font-bold"><Image src={home} className="inline-block w-8 mr-2 mb-2" alt="Home Icon"/>Home</Link>
                        <Image src={arrowRight} className="inline-block w-8 mb-3 mx-3" alt="Arrow Right Icon"/>
                        <Link href={"/book-category"} className="text-[30px] font-bold"><Image src={book} className="inline-block w-8 mr-2 mb-2" alt="Book Icon"/>Book Categories</Link>
                        <Image src={arrowRight} className="inline-block mb-3 w-8 mx-3" alt="Arrow Right Icon"/>
                        <Link href={""} className="text-[30px] font-bold text-red-600"><Image src={bookOpen} className="inline-block w-8 mr-2 mb-2" alt="Book Open Icon"/>{bookById.book_title}</Link>
                    </li>
                </ul>
            </div>
            <div className="bg-white w-[80%] h-auto m-auto rounded-[30px]">
                <div className="absolute top-[50px] right-[300px]">
                    <Image width={301} height={407} src={bookById.image} className="rounded-[40px]" alt="Book Image"/>
                </div>
                <div className="p-20">
                    <h1 className="pt-44 text-[30px] font-bold">{bookById.book_title}</h1>
                    <p className="text-[27px] py-4">By <span className="inline-block text-[#087E8B]">{bookById.book_author}</span></p>
                    <p className="text-[20px]">{bookById.description}</p>
                </div>
            </div>
        </div>
    )
}