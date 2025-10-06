import { title } from "process";

type Mainprops = {
  image_B: string;
  title: string;
  price: string;
};

export default function Main({ image_B, title, price }: Mainprops) {
  return (
    <>
      <div className="bg-white  rounded-xl shadow-md p-2 flex flex-col items-center justify-center m-8 w-47 h-72">
          <img src={image_B} alt="404" className="max-h-full object-contain mb-8" />
          <p className="text-sm font-medium text-black text-center">{title}</p>
          <p className="text-xs text-black font-bold">{price}</p>
        </div>

    </>
  );
}
