import Header from "./Components/Header";
import Box from "./Components/Box";
import Main from "./Components/Main";
import Main_2 from "./Components/Main_2";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <div>Product-Page Section</div>
       
      <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-row">
          <div className="bg-blue-700 w-290px h-375px rounded-3xl ml-4 mt-3 shadow-2xl">
            <img
              src="\Image\1405.jpg"
              alt="کتاب درس"
              className="w-290px h-375px rounded-2xl"
            />
          </div>
          <a href="https://www.driq.com/">
            <div className="bg-fuchsia-700 w-930px h-375px rounded-3xl ml-10 mt-3 shadow-2xl">
              <img
                src="/image/1-2.jpeg"
                alt="دکتر آی کیو"
                className="w-930px h-375px rounded-2xl"
              />
            </div>
          </a>
        </div>
        <Books />
        <Books_2 />
        <Books_3 />
        <Row />
        <Books_4 />
        <Books_5 />
        <Row_2 />
        <Books_6 />
        <Books_7 />
        <Row_3 />
        <Books_8 />
        <Books_9 />

        <div className=" mt-5 rounded-3xl flex justify-center">
          <a href="https://www.gajmarket.com/incredible-offers/board-games?page=1&pageSize=32&sortType=most_discount&filters[0][static-filter][0]=stock">
            <img
              src="\Image\Big_img.jpeg"
              width="1315"
              alt="404 not-found"
              className="rounded-3xl"
            />
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export function Books() {
  return (
    <div className="flex justify-between rounded-3xl w-full max-w-315 shadow-2xl bg-neutral-100 ml-4 py-4 px-18 mt-10">
      <Box image_A="\Image\2\English.jpeg">کتاب های زبان</Box>
      <Box image_A="\Image\2\College.jpeg">کتاب های دانشگاهی</Box>
      <Box image_A="\Image\2\Stationery.jpeg"> لوازم التحریر</Box>
      <Box image_A="\Image\2\Game.jpeg"> بازی آموزشی</Box>
      <Box image_A="\Image\2\Novle.jpeg"> رمان بزرگسال</Box>
    </div>
  );
}

export function Books_2() {
  return (
    <div className="w-full max-w-328 overflow-hidden mt-7">
      {/* Red Header */}
      <div className="bg-red-500 py-4 px-6 mt-8  rounded-t-3xl flex flex-col items-end text-right">
        <p className="text-white text-xl font-bold leading-tight">
          !پیشنهاد ویژه
        </p>
        <div className="border-b border-white w-full mt-2"></div>
      </div>
      {/* Books_2 Section */}
      <div className="flex flex-row justify-between items-center rounded-b-2xl bg-red-500 p-5">
        <a href="https://www.gajmarket.com/%D8%AA%D8%AE%D9%81%DB%8C%D9%81%D8%A7%D8%AA-%D9%88%DB%8C%DA%98%D9%87">
          <img src="\Image\Gajaneh-Takhfif.png" width={175} />
        </a>
        <div className="text-white text-right text-2xl font-bold leading-tight gap-3"></div>
        <Main
          image_B="\Image\3\Paint-Book.jpeg"
          title="دفتر نقاشی 50 برگ"
          price="65.250 تومان"
        ></Main>
        <Main
          image_B="\Image\3\Poem-Book.jpeg"
          title="کتاب اشعار استاد رحمانی"
          price="89.999 تومان"
        />
        <Main
          image_B="\Image\3\Inteligent-Game.jpeg"
          title="بازی فکری بزرگراه"
          price="145.000 تومان"
        />
        <Main
          image_B="\Image\3\Din o zendegi.jpeg"
          title="کتاب دین و زندگی دهم"
          price="74.000 تومان"
        />
      </div>
    </div>
  );
}
export function Books_3() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-8 w-full rounded-3xl max-w-328 flex flex-col items-end text-right">
      <p className="text-black text-xl mr-4 font-bold leading-tight">
        کمک درسی
      </p>
      <div className="border-b-1 w-23 mt-2 mr-4 border-b-green-600"></div>
      <div className="flex gap-4 bg-neutral-100 p-4 shadow-2xl rounded-3xl mt-6 w-full ">
        <Main
          image_B="\Image\4\Intelligence Book.jpeg"
          title="کتاب هوش سرعت و دقت ششم"
          price="250.750 تومان"
        />
        <Main
          image_B="\Image\4\mantegh.jpeg"
          title="کتاب منطق دهم انسانی"
          price="56.100 تومان"
        />
        <Main
          image_B="\Image\4\physics.jpeg"
          title="کتاب فیزیک یازدهم ریاضی"
          price="236.000 تومان"
        />
        <Main
          image_B="\Image\4\riyazi.jpeg"
          title="کتاب ریاضی هفتم"
          price="180.000 تومان"
        />
        <Main
          image_B="\Image\4\science.jpeg"
          title="کتاب علوم هشتم"
          price="134.000 تومان"
        />
      </div>
    </div>
  );
}
export function Row() {
  return (
    <div className=" bg-neutral-200 items-center justify-between mt-4 flex flex-row h-44 w-full max-w-328 rounded-3xl px-3 ">
      <div className="bg-neutral-200 rounded-2xl max-w-328">
        <a href="https://www.gajmarket.com/incredible-offers/language-books?page=1&pageSize=32&sortType=most_discount&filters[0][static-filter][0]=stock">
          <img
            src="\Image\5\Language learning.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>

      <div className="bg-neutral-200 rounded-3xl ">
        <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A8%D8%A7%D8%B2%DB%8C-%D8%B3%D8%A7%D8%AE%D8%AA%D9%86%DB%8C?page=1&pageSize=32&sortType=most_purchased&filters[0][static-filter][0]=stock">
          <img
            src="\Image\5\Playing.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>
      <div className="bg-neutral-200 rounded-3xl ">
        <a href="https://www.gajmarket.com/%D8%AF%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%88-%D8%B1%D9%85%D8%A7%D9%86?page=1&pageSize=32&sortType=most_purchased&filters[0][static-filter][0]=stock">
          <img
            src="\Image\5\Storys.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>

      <div className="bg-neutral-200 rounded-3xl ">
        <a href="https://www.gajmarket.com/incredible-offers/stationery?page=1&pageSize=32&sortType=most_rating&filters[0][static-filter][0]=stock">
          <img
            src="\Image\5\Girl-image.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>
    </div>
  );
}

export function Books_4() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-5 w-full rounded-3xl max-w-328 h-92 flex flex-row-reverse items-center justify-between ">
      <p className="text-black text-xl pb-84 font-bold leading-tight">
        عمومی بزرگسال
      </p>
      <img src="\Image\6\Women_book.png" width={250} />

      <Main_2
        image_c="\Image\6\Strees.jpeg"
        title="کتاب اضطراب موقعیت"
        price="197.100 تومان"
      />
      <Main_2
        image_c="\Image\6\Digital.jpeg"
        title="کتاب مینی مالیسم دیجیتال"
        price="153.000 تومان"
      />
      <Main_2
        image_c="\Image\6\Yellow_book.jpeg"
        title="کتاب حد و مرز های بهتر"
        price="90.000 تومان"
      />
      <Main_2
        image_c="\Image\6\cross_book.jpeg"
        title="کتاب اهل کتاب"
        price="99.000 تومان"
      />
      <div className="pt-18 bg-gray-400 shadow-2xl rounded-3xl h-50 w-14">
        <a href="https://www.gajmarket.com/%D8%B9%D9%85%D9%88%D9%85%DB%8C-%D8%A8%D8%B2%D8%B1%DA%AF%D8%B3%D8%A7%D9%84-3">
          <div className="text-black text-xs font-semibold text-center ">
            مشاهده بیشتر
          </div>
        </a>
      </div>
    </div>
  );
}

export function Books_5() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-8 w-full rounded-3xl max-w-328 flex flex-col items-end text-right">
      <p
        className="text-black text-xl mr-3 font-semibold leading-tight"
        style={{ wordSpacing: "-3px" }}
      >
        پر فروش های کتاب زبان های خارجی
      </p>
      <div className="border-b-1 w-69 mt-2 mr-3 border-b-green-600"></div>
      <div className="flex gap-4 flex-row-reverse justify-between items-center shadow-2xl bg-neutral-100 p-4 rounded-3xl mt-9 w-full ">
        <Main_2
          image_c="\Image\7\Q Skills for Success 1 Reading and Writing Third Edition.jpeg"
          title="Q Skills for Success 1 Reading and Writing"
          price="105.000 تومان"
        />
        <Main_2
          image_c="\Image\7\Touchstone 3 Second Edition Teacher's Book.jpeg"
          title="Touchstone 3 Second Edition Teacher's Book"
          price="154.000 تومان"
        />
        <Main_2
          image_c="\Image\7\Alter Ego Plus 4 Livre de L'eleve + Cahier d'activites.jpeg"
          title="Alter Ego Plus 4 Livre de L'eleve + Cahier"
          price="465.000 تومان"
        />
        <Main_2
          image_c="\Image\7\Deutsch Intensiv Horen und Sprechen A2.jpeg"
          title="Deutsch Intensiv Horen und Sprechen A2"
          price="84.000 تومان"
        />
        <Main_2
          image_c="\Image\7\French in 30 Days.jpeg"
          title="French in 30 Days"
          price="120.000 تومان"
        />
        <div className="pt-18 bg-gray-400 shadow-2xl rounded-3xl h-50 w-14">
          <a href="https://www.gajmarket.com/%D9%BE%D8%B1%D9%81%D8%B1%D9%88%D8%B4%D9%87%D8%A7%DB%8C-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B2%D8%A8%D8%A7%D9%86%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D8%B1%D8%AC%DB%8C">
            <div className="text-black text-xs font-semibold text-center ">
              مشاهده بیشتر
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Row_2() {
  return (
    <div className="bg-white rounded-3xl w-full px-4 mt-5">
      <div className="grid grid-cols-3 gap-4 auto-rows-min">
        {/* ستون اول */}
        <div className="rounded-3xl overflow-hidden">
          <a href="https://www.gajmarket.com/incredible-offers/childs-books?page=1&pageSize=32&sortType=most_discount&filters[0][static-filter][0]=stock">
            <img
              src="\Image\Row_2\Kids world.jpeg"
              alt="404"
              className="rounded-3xl w-110 h-202"
            />
          </a>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="rounded-3xl overflow-hidden">
            <a href="https://www.gajmarket.com/%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AF%D9%87%DA%A9%D8%AF%D9%87-%D9%87%D9%88%D8%B3%D9%85?page=1&pageSize=32&sortType=most_purchased&filters[0][static-filter][0]=stock">
              <img
                src="\Image\Row_2\Dehkadeh.jpeg"
                alt="404"
                className="rounded-3xl w-auto h-full"
              />
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A8%D8%A7%D8%B2%DB%8C-%D9%81%DA%A9%D8%B1%DB%8C-%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C?page=1&pageSize=32&sortType=most_purchased&filters[0][static-filter][0]=stock">
              <img
                src="\Image\Row_2\Entertainment.jpeg"
                alt="404"
                className="rounded-3xl w-108 h-96"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="rounded-3xl overflow-hidden">
            <a href="https://www.gajmarket.com/incredible-offers/general-books?page=1&pageSize=32&sortType=most_discount&filters[0][static-filter][0]=stock">
              <img
                src="\Image\Row_2\Genral_Books.jpeg"
                alt="404"
                className="rounded-3xl w-full h-full "
              />
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D9%86%D9%88%D8%B4%D8%AA-%D8%A7%D9%81%D8%B2%D8%A7%D8%B1?page=1&pageSize=32&sortType=category_location&filters[0][static-filter][0]=stock">
              <img
                src="\Image\Row_2\Nevesht_afzar.jpeg"
                alt="404"
                className="rounded-3xl w-full h-96 "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Books_6() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-8 w-full h-105 rounded-3xl max-w-328 flex flex-col items-end text-right">
      <p
        className="text-black text-xl mr-4 font-semibold leading-tight"
        style={{ wordSpacing: "-3px" }}
      >
        پر فروش های لوازم التحریر
      </p>
      <div className="border-b-1 w-51 mt-2 mr-4 border-b-green-600"></div>
      <div className="flex gap-4 flex-row-reverse justify-between items-center shadow-2xl bg-neutral-100 p-4 rounded-3xl mt-8 w-full ">
        <Main_2
          image_c="\Image\8\Water.jpeg"
          title="قمقمه شوینزی طرح دختر ظرفیت 720 میلی لیتر "
          price="542.000 تومان"
        />
        <Main_2
          image_c="/Image/8/Marker2.jpeg"
          title="ماژیک وایت برد 6 رنگ کورس "
          price="270.000 تومان"
        />
        <Main_2
          image_c="\Image\8\Marker.jpeg"
          title="ماژیک علامتگذار کنکو"
          price="23.580 تومان"
        />
        <Main_2
          image_c="\Image\8\Ghalat_gir.jpeg"
          title="غلط گیر 12 میلی لیتری پارسیکار "
          price="24.780 تومان"
        />
        <Main_2
          image_c="\Image\8\Eraser.jpeg"
          title="پاک کن الیپون"
          price="18.630 تومان"
        />
        <div className="pt-18 bg-gray-400 shadow-2xl rounded-3xl h-50 w-14">
          <a href="https://www.gajmarket.com/%D9%BE%D8%B1%D9%81%D8%B1%D9%88%D8%B4%D9%87%D8%A7%DB%8C-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1">
            <div className="text-black text-xs font-semibold text-center ">
              مشاهده بیشتر
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Books_7() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-8 w-full max-w-328  rounded-3xl flex flex-col items-end text-right">
      <p className="text-black text-xl mr-27 font-bold leading-tight">آموزشی</p>
      <div className="bg-neutral-100 mt-5 w-full rounded-3xl shadow-2xl max-w-328 h-98 flex flex-row-reverse items-center justify-between">
        <img src="\Image\9\Big_Book.png" className="mt-20" width={280}></img>
        <Main_2
          image_c="\Image\9\iQ.jpeg"
          title="کتاب زیست شناسی جامع کنکور تجربی iQ "
          price="841.500 تومان"
        />
        <Main_2
          image_c="\Image\9\Farsi.jpeg"
          title="کتاب فارسی دوازدهم سری فرمول بیست"
          price="416.500 تومان"
        />
        <Main_2
          image_c="\Image\9\EQ.jpeg"
          title="EQ کتاب جامع ششم سری"
          price="637.500 تومان"
        />
        <Main_2
          image_c="\Image\9\Physic.jpeg"
          title="کتاب فیزیک دهم تجربی سری میکرو طبقه بندی"
          price="542.000 تومان"
        />
        <div className="pt-18 bg-gray-400 shadow-2xl mr-2 rounded-3xl h-50 w-14">
          <a href="https://www.gajmarket.com/%D9%BE%D8%B1%D9%81%D8%B1%D9%88%D8%B4%D9%87%D8%A7%DB%8C-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1">
            <div className="text-black text-xs font-semibold text-center ">
              مشاهده بیشتر
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Row_3() {
  return (
    <div className=" bg-neutral-200 items-center justify-between mt-5 flex flex-row-reverse h-44 w-full max-w-328 rounded-3xl px-3 ">
      <div className="bg-neutral-200 rounded-2xl max-w-328">
        <a href="https://www.gajmarket.com/incredible-offers/textbooks-books?page=1&pageSize=32&sortType=most_purchased&filters[0][static-filter][0]=stock">
          <img
            src="\Image\Row_3\Learning.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>

      <div className="bg-neutral-200 rounded-3xl ">
        <a href="https://www.gajmarket.com/%DA%A9%D8%AA%D8%A7%D8%A8-%D8%AF%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%DA%A9%D9%88%D8%AF%DA%A9-%D9%88-%D9%86%D9%88%D8%AC%D9%88%D8%A7%D9%86?page=1&pageSize=32&sortType=most_purchased&filters[0][static-filter][0]=stock">
          <img
            src="\Image\Row_3\Kids_storys.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>
      <div className="bg-neutral-200 rounded-3xl ">
        <a href="https://www.gajmarket.com/incredible-offers/university-books?page=1&pageSize=32&sortType=most_discount&filters[0][static-filter][0]=stock">
          <img
            src="\Image\Row_3\University.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>

      <div className="bg-neutral-200 rounded-3xl ">
        <a href="https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%81%D8%AA%D8%B1-%DA%A9%D8%A7%D8%BA%D8%B0?page=1&pageSize=32&sortType=most_rating&filters[0][static-filter][0]=stock">
          <img
            src="\Image\Row_3\Note_book.jpeg"
            alt="404"
            width="270px"
            height="320px"
            className="rounded-3xl"
          />
        </a>
      </div>
    </div>
  );
}

export function Books_8() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-5 w-full max-w-328  rounded-3xl flex flex-col items-end text-right">
      <p className="text-black text-xl mr-27 font-bold leading-tight">
        لوازم تحریر
      </p>
      <div className="bg-neutral-100 mt-5 w-full rounded-3xl shadow-2xl max-w-328 h-98 flex flex-row-reverse items-center justify-between">
        <img src="\Image\10\Bag.png" className="mt-20" width={280}></img>
        <Main_2
          image_c="\Image\10\Sharpnner.jpeg"
          title="تراش رومیزی سی بی اس مدل Bear "
          price="162.000 تومان"
        />
        <Main_2
          image_c="\Image\10\Rocket.jpeg"
          title="قلک بستین مدل موشک طرح Looney Tunes"
          price="69.200 تومان"
        />
        <Main_2
          image_c="\Image\10\File.jpeg"
          title="پوشه گیره دار سوپر بایند"
          price="15.000 تومان"
        />
        <Main_2
          image_c="\Image\10\Kiti.jpeg"
          title="مهر مدل غلطکی طرح کیتی به همراه استامپ"
          price="119.900 تومان"
        />
        <div className="pt-18 bg-gray-400 shadow-2xl mr-2 rounded-3xl h-50 w-14">
          <a href="https://www.gajmarket.com/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-4">
            <div className="text-black text-xs font-semibold text-center">
              مشاهده بیشتر
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Books_9() {
  return (
    <div className="bg-neutral-200 py-4 px-6 mt-8 w-full h-105 rounded-3xl max-w-328 flex flex-col items-end text-right">
      <p
        className="text-black text-xl mr-4 font-semibold leading-tight"
        style={{ wordSpacing: "-3px" }}
      >
        پر فروش های کتاب دانشگاهی
      </p>
      <div className="border-b-1 w-58 mt-2 mr-4 border-b-green-600"></div>
      <div className="flex gap-4 flex-row-reverse justify-between items-center shadow-2xl bg-neutral-100 p-4 rounded-3xl mt-8 w-full ">
        <Main_2
          image_c="\Image\11\3D_mesurment.jpeg"
          title="کتاب آشنایی با سیستم های اندازه گیری سه بعدی"
          price="81.000 تومان"
        />
        <Main_2
          image_c="\Image\11\Sazman.jpeg"
          title="کتاب نظریه های سازمان دولتی"
          price="247.000 تومان"
        />
        <Main_2
          image_c="\Image\11\Moadele.jpeg"
          title="کتاب هنرمندانه معامله کنید"
          price="123.500 تومان"
        />
        <Main_2
          image_c="\Image\11\Harmonic.jpeg"
          title="کتاب دایره المعارف الگوهای هارمونیک"
          price="175.000 تومان"
        />
        <Main_2
          image_c="\Image\11\Chegone_Besazim.jpeg"
          title="کتاب چگونه بسازیم"
          price="237.000 تومان"
        />
        <div className="pt-18 bg-gray-400 shadow-2xl rounded-3xl h-50 w-14">
          <a href="https://www.gajmarket.com/%D9%BE%D8%B1%D9%81%D8%B1%D9%88%D8%B4%D9%87%D8%A7%DB%8C-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%DB%8C">
            <div className="text-black text-xs font-semibold text-center ">
              مشاهده بیشتر
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
