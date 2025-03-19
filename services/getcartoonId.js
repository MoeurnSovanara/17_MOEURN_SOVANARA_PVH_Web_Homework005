export default async function GetCartoonById(id) {
    const fechingCartoonbyId= await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`)
    const cartoon = await fechingCartoonbyId.json();
    const cartoonObj = await cartoon.payload;
    return cartoonObj;
}