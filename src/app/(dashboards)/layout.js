import DropDownButton from "../components/cards/dropDownButton";
import Sidebar from "../components/sidebar/Sidebar";
import { Button } from "@heroui/button";
import GetAllOptions from "../../../services/optionData";

export default async function Dashboard({ children }) {
  const option = await GetAllOptions();
  const options = await option.payload;
  console.log(options);

  return (
    <>
      <div className="grid grid-cols-12 bg-slate-100">
        <aside className="grid col-span-2 bg-white">
          <Sidebar />
        </aside>
        <section className="grid col-span-10 bg-slate-100 overflow-auto h-screen relative">
          <div className="relative flex justify-center mt-10">
            <input
              className="relative appearance-none pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-[87%] h-16 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline text-[20px]"
              id="username"
              type="text"
              placeholder="Search anything you want to"
            />
          </div>
          <div className="absolute z-20 left-28 inset-y-0 top-[-805px] flex items-center">
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

          <div className="bg-white h-screen w-[87%] rounded-3xl p-10 mt-9 m-auto overflow-auto">
            <div className="flex justify-between">
              <Button className="rounded-full bg-[#F5F7F8] text-[20px] text-[#087E8B] h-16 w-44">
                HomePage    
              </Button>
              {<DropDownButton dataApi={options} />}
            </div>

            <div className="w-full border-t mt-3"></div>
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
