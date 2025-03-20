import Notfound from "@/app/customNot-found/not-found"

export default async function BookFetchData(search) {
    const response = await fetch(`https://nextjs-homework005.vercel.app/api/book${!search? "":`?search=${search}`}`);
    const data = await response.json();


    return data;

}