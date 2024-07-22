import { NavBar } from "@/components/nav-bar"
import { SearchForm } from "@/app/search/_components/search-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <NavBar mode="search"/>
      </div>
      <div className="my-20 px-4 lg:px-20">
        <SearchForm />
      </div>
    </div>
  );
}
