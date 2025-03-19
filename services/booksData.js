export default async function BookFetchData() {
    const response = await fetch('https://nextjs-homework005.vercel.app/api/book');
    const data = await response.json();


    return data;

}