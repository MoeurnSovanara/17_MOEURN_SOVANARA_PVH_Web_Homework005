export default async function CartoonFetchData(){
    const response = await fetch('https://nextjs-homework005.vercel.app/api/cartoon');
    const data = await response.json();
    return data;
}