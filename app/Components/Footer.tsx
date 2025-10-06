export default function Footer() {
  return (
    <div className="bg-green-400 flex flex-row w-full max-w-328 h-full mt-5 rounded-3xl justify-end">
      <div className="bg-neutral-200 flex flex-row-reverse w-98 h-60 rounded-l-3xl justify-between items-center px-3">
        <img src="\Image\Footer\tandis.png" alt="404" />

        <div className="bg-white rounded-2xl ">
          <img src="\Image\Footer\anjoman.png" alt="404" width="70px" />
        </div>

        <div className="bg-white rounded-2xl ">
          <img src="\Image\Footer\Etemad.png" alt="404" width="78px" />
        </div>

        <div className="bg-white rounded-2xl ">
          <img src="\Image\Footer\Barresi.png" alt="404" width="85px" />
        </div>
        
      </div>
      <div className="bg-neutral-200 flex flex-col h-60 w-70">
        <div>
          <p className="bg-green-400 font-medium h-8 text-center rounded-2xl mt-16">
            .کارشناسان ما میزبان صدایتان هستند
          </p>
          <div className="bg-neutral-200 text-black pl-5 font-semibold w-fit mt-3">
            Telephone: +98216420
          </div>
          <div className="flex flex-row bg-neutral-200 justify-between h-fit items-start">
            <a href="https://www.gajmarket.com/Gajfamily/Register">
              <p className="bg-neutral-300 rounded-2xl ml-3 h-8 w-30 text-center mt-6">
                ثبت نام معلمان
              </p>
            </a>
            <a href="https://www.gajmarket.com/GajSchool/Register">
              <p className="bg-neutral-300 rounded-2xl mr-3 h-8 w-30 text-center mt-6">
                ثبت نام مدارس
              </p>
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-black py-10 px-5 w-160 rounded-r-3xl">
        <div className="max-w-6xl  grid grid-cols-2 md:grid-cols-4 justify-center gap-8 text-right mx-auto mr-6">
          <div>
            <h4 className="font-semibold mb-3">نقشه گاج مارکت</h4>
            <ul className="space-y-2 text-sm text-right ">
              <li>
                <a
                  href="https://www.gajmarket.com/t/AboutUs"
                  className="hover:text-gray-400"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/contactus"
                  className="hover:text-gray-400"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/t/Job"
                  className="hover:text-gray-400"
                >
                  همکاری و فرصت شغلی
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/stores"
                  className="hover:text-gray-400"
                >
                  شعب گاج
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">مجموعه گاج</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://gajino.com/" className="hover:text-gray-400">
                  گاجینو
                </a>
              </li>
              <li>
                <a href="https://www.driq.com/" className="hover:text-gray-400">
                  دکتر آی کیو
                </a>
              </li>
              <li>
                <a
                  href="https://www.mygaj.com/"
                  className="hover:text-gray-400"
                >
                  مای گاج
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">خدمات مشتریان</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.gajmarket.com/t/Discount"
                  className="hover:text-gray-400"
                >
                  معرفی تخفیف ها
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/t/faq"
                  className="hover:text-gray-400"
                >
                  پرسش های متداول
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/t/Back"
                  className="hover:text-gray-400"
                >
                  چگونگی بازگشت کالا
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/t/Privacy"
                  className="hover:text-gray-400"
                >
                  حریم خصوصی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">راهنمای خرید</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.gajmarket.com/t/Order"
                  className="hover:text-gray-400"
                >
                  چگونگی ثبت سفارش
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/t/ShippingMethod"
                  className="hover:text-gray-400"
                >
                  چگونگی ارسال کالا
                </a>
              </li>
              <li>
                <a
                  href="https://www.gajmarket.com/t/Payment"
                  className="hover:text-gray-400"
                >
                  چگونگی پرداخت
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
