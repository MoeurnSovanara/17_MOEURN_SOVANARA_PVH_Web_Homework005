
import BookFetchData from "../../../../services/booksData";
import CardCategory from "@/app/components/cards/CardBookCate";


export default  async function BookCategory(){

    const categories = await BookFetchData();
    const books =  await categories.payload;

    console.log(books);
    
    return (
        <div className=" w-full h-full grid grid-cols-12 gap-4">
                {
                books.map((item) => (
                    <CardCategory key={item.id} items={item}/>
                ))
                }
        </div>
    )
}