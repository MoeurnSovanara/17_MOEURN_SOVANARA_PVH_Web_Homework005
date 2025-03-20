export default async function CartoonFetchData(search){
    const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon${!search? "":`?search=${search}`}`);
    const data = await response.json();
    return data;
}