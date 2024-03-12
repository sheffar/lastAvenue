type PropTypes = {
  bg: string;
  title: string;
  description: string;
  price: string;
};

const ProductImgCard: React.FC<PropTypes> = ({ description, bg, price, title }) => {
  return (
    <div
      className="box-border h-[700px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex h-full w-full flex-col justify-end bg-gradient-to-b from-[rgba(33,33,33,0)] to-[rgba(90,56,56,0.7)] px-4 pb-16">
        <div>
          <p className="font-jost text-xl font-semibold text-white">{title}</p>
          <p className="text-[17px] text-[rgba(224,224,224,1)]">{description}</p>
          <p className="text-lg font-bold text-[rgba(255,161,92,1)]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductImgCard;
