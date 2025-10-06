export function Row_2() {
  return (
    <div className="bg-white rounded-3xl w-full flex justify-center px-4 mt-5 items-start flex-col ">
      <div className="flex flex-row">
        <div className="bg-blue-500 w-fit h-fit rounded-3xl">
          <img
            src="\Image\Row_2\Kids world.jpeg"
            alt="404"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col ml-1.5">
          <div className="bg-green-600 w-fit h-fit ml-1 rounded-3xl">
            <img
              src="\Image\Row_2\Dehkadeh.jpeg"
              alt="404"
              className="rounded-3xl"
            />
          </div>
          <div className="bg-blue-800 ml-2 mt-4 w-80 h-fit rounded-3xl">
            <img
              src="\Image\Row_2\Entertainment.jpeg"
              alt="404"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col ml-2 rounded-3xl gap-5">
          <div className="h-[308px] w-[340px] bg-black rounded-3xl overflow-hidden">
            <img
              src="\Image\Row_2\Genral_Books.jpeg"
              width={340}
              alt="404"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
          <div className="bg-blue-800 rounded-3xl ml-10">
            <img
              src="\Image\Row_2\Nevesht_afzar.jpeg"
              alt="404"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}