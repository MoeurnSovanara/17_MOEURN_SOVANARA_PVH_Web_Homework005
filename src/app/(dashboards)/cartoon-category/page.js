import CartoonCategory from "@/app/components/cards/CardCartoonCate"
import CartoonFetchData from "../../../../services/cartoonData"
export default async function CartoonPage({searchParams}){
    const { Id } = await searchParams;
    const search= (await searchParams).search
    const categories = await CartoonFetchData(search);
    
    const cartoon = await categories.payload;
    console.log(cartoon)
    return (
        <div className=" w-full h-full grid grid-cols-12 gap-4">
            {cartoon.map((item) => (
                <CartoonCategory items={item} key={item.id}/>
            ))}
        </div>
    )
}