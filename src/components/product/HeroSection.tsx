import { AssetsUtils } from "@/utils/AssetsUtils";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="h-[650px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${AssetsUtils.images.productBackground})` }}
    >
      <div className="box-border flex h-full w-full flex-col items-center justify-between bg-black/50 pb-8 pt-48 backdrop-brightness-50">
        <h2 className="font-jost text-6xl text-white">Avenues</h2>
        <Link to="#">
          <div className="flex flex-col items-center text-center text-lg font-semibold text-white">
            See in Collection
            <img src={AssetsUtils.icons.arrowWhiteDown} alt="arrow_down" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
