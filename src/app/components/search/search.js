"use client"
import Form from "next/form";
import { usePathname } from "next/navigation";
export default function SearchCard() {

    const search = usePathname();
  return (
    <Form action={search}>
        <div className="relative flex justify-center mt-10">
            <input
              className="relative text-[24px] pb-3 opacity-50 appearance-none pl-20 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-[87%] h-16 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline "
              id="username"
              type="text"
              name="search"
              placeholder="Search anything you want to"
            />
          </div>
          <div className="absolute z-20 left-32 inset-y-0 top-[-805px] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div> 
    </Form>
  );
}
