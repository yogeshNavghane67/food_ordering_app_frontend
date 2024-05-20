import landing2Image from "../assets/landing2.jpg";
import landing3Image from "../assets/landing3.jpg";
import mobile1Image from "../assets/mobile1.jpg";
import mobile2Image from "../assets/mobile2.jpg";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-3xl font-bold tracking-tight text-red-600">
          Discover the best food in your nearest place
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing2Image} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-2xl tracking-tighter">
            Seasonal Menus
          </span>
          <span>
            Each dish have a detailed description that includes <br />
            ingredients, cooking techniques, and flavor profiles
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing3Image} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-2xl tracking-tighter">
            Authentic Ingredients
          </span>
          <span>
            Highlight any authentic or hard-to-find ingredients <br />
            that add to the authenticity of the dishes
          </span>
        </div>
      </div>
      <span className="text-red-600 font-bold tracking-tighter text-center text-3xl">
          Order in 4 simple steps
        </span>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={mobile1Image} />
        <img src={mobile2Image} />
      </div>
    </div>
  );
};

export default HomePage;
