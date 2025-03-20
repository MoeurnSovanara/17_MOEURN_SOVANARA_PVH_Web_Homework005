import BookFetchData from "../../../../services/booksData";
import CardCategory from "@/app/components/cards/CardBookCate";
import FilterBookByCateId from "../../../../services/filterBookByCateId";

export default async function BookCategory({ searchParams }) {
  const { Id } = await searchParams;

  const categories = await BookFetchData();
  const filterBook = await FilterBookByCateId(Id);
  const books = await categories.payload;
  const data = Id ? filterBook : books;
  console.log("SearchParams:", Id);

  return (
    <div className=" w-full h-full grid grid-cols-12 gap-4">
      {data.map((item) => (
        <CardCategory key={item.id} items={item} />
      ))}
    </div>
  );
}
