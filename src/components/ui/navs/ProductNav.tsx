import { AssetsUtils } from "@/utils/AssetsUtils";

const ProductNav: React.FC = () => {
  return (
    <nav className="flex justify-around py-8">
      <div className="flex items-center gap-8">
        <div className=" flex items-center justify-center gap-1">
          <img src={AssetsUtils.icons.world} alt="fotisto_globe" />
          <select name="" className="border-none bg-transparent outline-none" id="">
            <option value="en">En</option>
            <option value="igb">Igb</option>
          </select>
        </div>

        <div>
          <img
            src={AssetsUtils.icons.search}
            alt="search_icon"
            className="cursor-pointer select-none"
          />
        </div>
      </div>
      <div className="text-center">
        <img className="h-full w-full" src={AssetsUtils.images.logo} alt="" />
      </div>
      <div className="flex items-center gap-4">
        <h6 className="text-[16px] font-semibold">My TLA</h6>
        <img src={AssetsUtils.icons.bag} alt="lock" className="" />
      </div>
    </nav>
  );
};

export default ProductNav;
