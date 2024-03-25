<template>
  <div class="container pr-10 pl-10 font-tajawal">
    <div class="grid place-content-center mt-16 mb-16">
      <div class="homeTitle text-center hover:text-center mb-16">
        <h1
          data-aos="fade-down"
          class="text-xl md:text-4xl font-bold mt-8 mb-8 font-tajawal"
        >
          سلاسل و منشورات
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
      <div class="py-8">
        <h2>
          الرئيسية &nbsp &nbsp > &nbsp &nbsp محتوانا &nbsp &nbsp > &nbsp &nbsp
          سلاسل و منشورات
        </h2>
      </div>
      <div class="pb-4">
        <!--Scroll bar component-->
        <Scrollbar />
      </div>
        
      <div class="relative">
        <h1
          data-aos="fade-down"
          class="text-4xl md:text-4xl font-bold pt-2 my-8 mb-6relative text-with-line font-Tajawal"
        >
          &nbsp &nbsp اكتشف سلاسلنا
        </h1>

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

      <div class="grid grid-cols-4 gap-[19px] py-8">
        <!--سلاسل و منشورات-->

        <TopSeriesCard />
        <TopSeriesCard />
        <TopSeriesCard />
        <TopSeriesCard />
        <TopSeriesCard />
        <TopSeriesCard />
        <TopSeriesCard />
        <TopSeriesCard />
      </div>

      <div class="relative">
        <h1
          data-aos="fade-down"
          class="text-4xl md:text-4xl font-bold pt-2 my-8 relative text-with-line font-Tajawal"
        >
          &nbsp &nbsp اكتشف دوراتنا على اليوتيوب
        </h1>

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

      <div class="grid grid-cols-3 gap-[19px] pb-16 pt-6">
        <!--دوراتنا على اليوتيوب-->

        <YoutubeSeriesCard />
        <YoutubeSeriesCard />
        <YoutubeSeriesCard />
        <YoutubeSeriesCard />
        <YoutubeSeriesCard />
        <YoutubeSeriesCard />
      </div>
    </section>
  </div>
</template>


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
