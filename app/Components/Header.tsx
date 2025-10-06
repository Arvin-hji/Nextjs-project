export default function Header() {
  return (
    <header className=" w-full h-28 rounded-3xl shadow-md px-5 mb-15">
      <div className="flex flex-row-reverse items-center justify-between px-6 py-4 bg-white">
        {/*logo*/}
        <div className="flex items-center">
          <img src="\Image\Header\Logo.png" alt="گاج مارکت" width="160" />
        </div>
        <div className=" w-full max-w-150 mx-6 ">
          <input
            type="text"
            placeholder="...محصول خود را جستجو کنید"
            className="w-full text-right bg-neutral-200 rounded-2xl px-4 py-3"
          />
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.gajmarket.com/login?ReturnUrl=%2F">
            <button className="border text-gray-900 rounded-2xl px-3 py-3 text-sm font-semibold hover:bg-gray-200">
              ثبت نام / ورود
            </button>
          </a>
          <button className=" text-gray-900 bg-neutral-200 rounded-2xl px-3 py-3 text-sm font-semibold hover:bg-gray-200">
            0 سبد خرید
          </button>
        </div>
      </div>
      <nav className="flex flex-row-reverse rounded-b-2xl pr-3 gap-8 bg-gray-200 py-3 font-normal text-gray-700">
        <a href="https://www.gajmarket.com/%DA%A9%D8%AA%D8%A7%D8%A8-%DA%A9%D9%85%DA%A9-%D8%AF%D8%B1%D8%B3%DB%8C" className="hover:font-bold transform-3d transition duration-700">کتاب کمک درسی</a>
        <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B9%D9%85%D9%88%D9%85%DB%8C" className="hover:font-bold transform-3d transition duration-700">کتاب عمومی</a>
        <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AA%D8%A7%D8%A8-%DA%A9%D9%88%D8%AF%DA%A9-%D9%86%D9%88%D8%AC%D9%88%D8%A7%D9%86" className="hover:font-bold transform-3d transition duration-700">کتاب کودک و نوجوان</a>
        <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%DB%8C" className="hover:font-bold transform-3d transition duration-700">کتاب دانشگاهی</a>
        <a href="https://www.gajmarket.com/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B2%D8%A8%D8%A7%D9%86" className="hover:font-bold transform-3d transition duration-700">کتاب زبان خارجی</a>
        <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1" className="hover:font-bold transform-3d transition duration-700">لوازم التحریر</a>
        <a href="https://www.gajmarket.com/%D8%A8%D8%A7%D8%B2%DB%8C-%D9%88-%D9%85%D8%AD%D8%AA%D9%88%D8%A7%DB%8C-%D9%85%D9%88%D8%B2%D8%B4%DB%8C" className="hover:font-bold transform-3d transition duration-700">بازی و آموزش</a>
        <a href="https://www.gajmarket.com/%D9%85%D9%88%D8%A7%D8%AF-%D8%BA%D8%B0%D8%A7%DB%8C%DB%8C" className="hover:font-bold transform-3d transition duration-700">مواد غذایی</a>
      </nav>
    </header>
  );
}
