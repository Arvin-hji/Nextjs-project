type Boxprops = {
  children: React.ReactNode;
  image_A: string;
};
export default function Box({ children, image_A}: Boxprops) {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-25 shadow-2xl rounded-2xl flex items-center justify-center bg-white text-black">
          <img src={image_A} alt="404" />
        </div>
        {children}
      </div>
    </>
  );
}
