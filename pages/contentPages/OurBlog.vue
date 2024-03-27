<template>
  <div class="container font-tajawal">
    <Nav />
    <div
      class="grid place-content-center mb-16"
      style="background-image: url('/images/bg-illustration.png')"
    >
      <div class="homeTitle text-center hover:text-center mb-16">
        <h1 class="text-xl md:text-4xl font-bold mt-8 mb-8 font-tajawal">
          مدونتنا
        </h1>
        <p data-aos-delay="300" class="md:text-lg mb-6 font-tajawal">
          مدونة تقنية تعمل على توفير مقالات في مختلف مجلات التقنية
        </p>
      </div>
      <SearchBar />
    </div>

    <section>
      <div class="py-12">
        <h2>
          الرئيسية &nbsp &nbsp > &nbsp &nbsp محتوانا &nbsp &nbsp > &nbsp &nbsp
           المدونة 
        </h2>
      </div>

      <Scrollbar />

      <div class="relative">
        <h1
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

      <div class=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

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

      <Footer />
    </section>
  </div>
</template>

<script>
const query = ref("");

const search = () => {
  // Implement your search logic here
  console.log("Searching for:", query.value);
};
</script>

<style>
.homeTitle {
  height: 100%;

  justify-content: center;
  align-items: center;
}
html {
  scroll-behavior: smooth;
}
</style>
