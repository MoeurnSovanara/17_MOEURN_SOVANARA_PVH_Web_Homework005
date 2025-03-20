import DropDownButton from "../components/cards/dropDownButton";
import Sidebar from "../components/sidebar/Sidebar";
import GetAllOptions from "../../../services/optionData";
import MenuLink from "../components/menuLink/menulink";
import SearchCard from "../components/search/search";

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

          <SearchCard />

          <div className="bg-white h-screen w-[87%] rounded-3xl p-10 mt-9 m-auto overflow-auto">
            <div className="flex justify-between">
              
              <MenuLink />

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
