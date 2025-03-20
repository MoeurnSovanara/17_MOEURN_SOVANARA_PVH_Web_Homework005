"use client";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function DropDownButton({ dataApi }) {
  const router = useRouter();
  const handleSelected = (e) => {
    router.push(`/book-category?Id=${e.target.value}`);
  };
  return (
    <>
      <form class="w-96 h-16">
        <select
          onChange={handleSelected}
          id="small"
          class=" w-full h-full px-4 text-[20px] text-[#087E8B] border-gray-300 rounded-[40px] bg-[#F5F7F8] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select all category</option>
          {dataApi.map((item, index) => (
            <>
              <option value={item.id} key={index}>
                {item.book_cate_name}
              </option>
            </>
          ))}
        </select>
      </form>
    </>
  );
}
