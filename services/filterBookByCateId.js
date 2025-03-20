export default async function FilterBookByCateId(bookId) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book?query=${bookId}`
  );
  const allData = await res.json();
  const data = await allData.payload;
  return data;
}
