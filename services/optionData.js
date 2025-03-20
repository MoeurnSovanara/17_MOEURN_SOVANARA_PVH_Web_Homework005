export default async function GetAllOptions(){
    const options = fetch('https://nextjs-homework005.vercel.app/api/book_category')
    const categoryOptions = (await options).json();
    
    return categoryOptions;
}