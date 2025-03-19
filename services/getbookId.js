export default async function GetBookById(id){
    const fechingbookbyId= await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`)
    const book = await fechingbookbyId.json();
    const bookObj = await book.payload;
    return bookObj;
}