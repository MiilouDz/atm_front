<template>
  <div class="container font-tajawal">
    <Nav />
    <div
      class="grid place-content-center mt-16 mb-16"
      style="background-image: url('/images/bg-illustration.png')"
    >
      <div class="homeTitle text-center hover:text-center mb-16">
        <h1
          data-aos="fade-down"
          class="text-xl md:text-4xl font-bold mt-8 mb-8 font-tajawal"
        >
          أسئلة شائعة
        </h1>
        <p
          data-aos="fade-down"
          data-aos-delay="300"
          class="md:text-lg mb-6 font-tajawal"
        >
          مدونة تقنية تعمل على توفير مقالات في مختلف مجلات التقنية
        </p>
      </div>
    </div>

    <section>
      <div class="py-12">
        <h2>
          الرئيسية &nbsp &nbsp > &nbsp &nbsp محتوانا &nbsp &nbsp > &nbsp &nbsp
          سلاسل و منشورات
        </h2>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <div class="pb-12 relative">
            <!--Start Scroll-->
            <div class="w-4/5">
              <Scrollbar />
            </div>
            <!--End Scroll-->

            <div class="absolute inset-y-0 left-0">
              <button
                class="bg-transparent font-semibold pb-2 pt-3 px-4 border border-2 border-white text-white rounded rounded inline-flex items-center"
              >
                <span class="text-xl">الأحدث</span>

                <svg
                  class="fill-current w-6 h-6 mr-1 mb-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M14.83 16.42 24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- First Qst -->
          <div class="max-w-sm w-full lg:max-w-full lg:flex pb-4">
            <div
              class="bg-[#171717] rounded-xl rounded-l-none p-4 flex flex-col justify-between leading-normal h-[242]"
            >
              <div class="mb-8">
                <div class="py-3">
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded ml-2"
                  >
                    الأمن السيبيراني
                  </button>
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded mx-2"
                  >
                    الأمن السيبيراني
                  </button>
                </div>

                <div class="text-gray-900 font-bold text-xl mb-2">
                  كيف اتعلم البلوكشاين ؟
                </div>
                <p class="text-gray-700 text-base">
                  تعرف اكثر عن البلوكشاين و الطريق لتعلمه تعرف اكثر عن
                  البلوكشاين و الطريق لتعلمه تعرف اكثر عن البلوكشاين و الطريق
                  لتعلمه تعرف اكثر عن البلوكشاين و الطريق لتعلمه
                </p>
              </div>
              <div class="flex items-center relative">
                <img
                  class="w-10 h-10 rounded-xl border border-1 border-[#f97316] ml-4"
                  src="public\images\podCast.webp"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-sm">
                  <p class="text-gray-400 text-lg leading-none">مقدم ميلود</p>
                </div>

                <div class="absolute top-2 left-2 text-sm">
                  <p class="text-gray-400 font-bold leading-none">
                    تاريخ النشر
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-60 flex-none bg-cover rounded-xl rounded-r-none text-center overflow-hidden"
            >
              <img
                src="assets\img\saba9.png"
                alt="Avatar of Jonathan Reinink"
              />
            </div>
          </div>

          <!-- second Qst -->
          <div class="max-w-sm w-full lg:max-w-full lg:flex pb-4">
            <div
              class="bg-[#171717] rounded-xl rounded-l-none p-4 flex flex-col justify-between leading-normal h-[242]"
            >
              <div class="mb-8">
                <div class="py-3">
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded ml-2"
                  >
                    الأمن السيبيراني
                  </button>
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded mx-2"
                  >
                    الأمن السيبيراني
                  </button>
                </div>

                <div class="text-gray-900 font-bold text-xl mb-2">
                  كيف اتعلم البلوكشاين ؟
                </div>
                <p class="text-gray-700 text-base">
                  تعرف اكثر عن البلوكشاين و الطريق لتعلمه تعرف اكثر عن
                  البلوكشاين و الطريق لتعلمه تعرف اكثر عن البلوكشاين و الطريق
                  لتعلمه تعرف اكثر عن البلوكشاين و الطريق لتعلمه
                </p>
              </div>
              <div class="flex items-center relative">
                <img
                  class="w-10 h-10 rounded-xl border border-1 border-[#f97316] ml-4"
                  src="public\images\podCast.webp"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-sm">
                  <p class="text-gray-400 text-lg leading-none">مقدم ميلود</p>
                </div>

                <div class="absolute top-2 left-2 text-sm">
                  <p class="text-gray-400 font-bold leading-none">
                    تاريخ النشر
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-60 flex-none bg-cover rounded-xl rounded-r-none text-center overflow-hidden"
            >
              <img
                src="assets\img\saba9.png"
                alt="Avatar of Jonathan Reinink"
              />
            </div>
          </div>

          <!-- Third Qst -->

          <div class="max-w-sm w-full lg:max-w-full lg:flex pb-4">
            <div
              class="bg-[#171717] rounded-xl rounded-l-none p-4 flex flex-col justify-between leading-normal h-[242]"
            >
              <div class="mb-8">
                <div class="py-3">
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded ml-2"
                  >
                    الأمن السيبيراني
                  </button>
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded mx-2"
                  >
                    الأمن السيبيراني
                  </button>
                </div>

                <div class="text-gray-900 font-bold text-xl mb-2">
                  كيف اتعلم البلوكشاين ؟
                </div>
                <p class="text-gray-700 text-base">
                  تعرف اكثر عن البلوكشاين و الطريق لتعلمه تعرف اكثر عن
                  البلوكشاين و الطريق لتعلمه تعرف اكثر عن البلوكشاين و الطريق
                  لتعلمه تعرف اكثر عن البلوكشاين و الطريق لتعلمه
                </p>
              </div>
              <div class="flex items-center relative">
                <img
                  class="w-10 h-10 rounded-xl border border-1 border-[#f97316] ml-4"
                  src="public\images\podCast.webp"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-sm">
                  <p class="text-gray-400 text-lg leading-none">مقدم ميلود</p>
                </div>

                <div class="absolute top-2 left-2 text-sm">
                  <p class="text-gray-400 font-bold leading-none">
                    تاريخ النشر
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-60 flex-none bg-cover rounded-xl rounded-r-none text-center overflow-hidden"
            >
              <img
                src="assets\img\saba9.png"
                alt="Avatar of Jonathan Reinink"
              />
            </div>
          </div>

          <!-- Forth Qst -->

          <div class="max-w-sm w-full lg:max-w-full lg:flex pb-4">
            <div
              class="bg-[#171717] rounded-xl rounded-l-none p-4 flex flex-col justify-between leading-normal h-[242]"
            >
              <div class="mb-8">
                <div class="py-3">
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded ml-2"
                  >
                    الأمن السيبيراني
                  </button>
                  <button
                    class="bg-transparent text-white text-lg px-2 border border-[#F7691D] rounded mx-2"
                  >
                    الأمن السيبيراني
                  </button>
                </div>

                <div class="text-gray-900 font-bold text-xl mb-2">
                  كيف اتعلم البلوكشاين ؟
                </div>
                <p class="text-gray-700 text-base">
                  تعرف اكثر عن البلوكشاين و الطريق لتعلمه تعرف اكثر عن
                  البلوكشاين و الطريق لتعلمه تعرف اكثر عن البلوكشاين و الطريق
                  لتعلمه تعرف اكثر عن البلوكشاين و الطريق لتعلمه
                </p>
              </div>
              <div class="flex items-center relative">
                <img
                  class="w-10 h-10 rounded-xl border border-1 border-[#f97316] ml-4"
                  src="public\images\podCast.webp"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-sm">
                  <p class="text-gray-400 text-lg leading-none">مقدم ميلود</p>
                </div>

                <div class="absolute top-2 left-2 text-sm">
                  <p class="text-gray-400 font-bold leading-none">
                    تاريخ النشر
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-60 flex-none bg-cover rounded-xl rounded-r-none text-center overflow-hidden"
            >
              <img
                src="assets\img\saba9.png"
                alt="Avatar of Jonathan Reinink"
              />
            </div>
          </div>
        </div>

        <div class="w-0 border-l pl-8 border-gray-300">
          <div class="mx-12">
            <h2>Test Part 3</h2>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <div class="flex items-center justify-center py-16">
            <button
              class="bg-orange_atm text-white rounded font-medium py-2 px-4 rounded inline-flex items-center"
            >
              <span>عرض المزيد </span>
              <svg
                class="fill-current w-4 h-4 mr-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9 16.172-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script></script>

<style>
.homeTitle {
  height: 100%;

  justify-content: center;
  align-items: center;
}

.scroll-container {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scrollbar-width: none; /* Hide scrollbar for Chrome and Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer/Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome and Safari */
}

.scroll-item {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  width: auto;
  height: 38px;

  border: 1px solid #f7691d;
  border-radius: 7px;

  /* Inside auto layout */
  flex: none;
  order: 6;
  flex-grow: 0;
}

.text-with-line::after {
  content: "";
  display: block;
  width: 16px; /* Adjust the width of the line */
  height: 100%;
  border-radius: 12px;
  background-color: #f44806; /* Adjust the color of the line */
  position: absolute;
  top: 0;
  right: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
