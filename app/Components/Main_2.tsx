type Mainprops = {
  image_c: string;
  title: string;
  price: string;
};

export default function Main_2({ image_c, title, price }: Mainprops) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-center w-47 h-68">
          <img src={image_c} alt="404" className="max-h-full object-contain mb-8" />
          <p className="text-sm font-medium text-black text-center">{title}</p>
          <p className="text-xs text-black font-bold">{price}</p>
        </div>

    </>
  );
}
