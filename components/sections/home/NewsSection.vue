<!-- ** latest news section ** -->
<template>
    <section class="mb-16">
      <!-- ? title group -->
      <div class="w-[90%] md:container mx-auto mb-4 py-4 md:p-6 flex justify-between items-center">
        <div class="sectionTitle relative w-max h-max text-xl md:text-[40px] font-medium font-tajawal mr-4">
          <h2> آخر الأخبار التقنية </h2>
        </div>
        <!-- ? show more btn -->
        <div class="flex items-center min-w-max relative font-tajawal">
          <button class=" hover:text-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <h6>عرض المزيد </h6>
            <!-- <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> -->
            <i class="fa-solid fa-arrow-left w-4 h-4 mr-2"></i>
          </button>
        </div>
      </div>
      <!-- ? group of cards-->
      <div class="md:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>    
    </section>
</template>

<script>
</script>

<style>
.sectionTitle::before{
  content: '';
  position: absolute;
  right: -18px;
  height: 90%;
  background: #fd4006;
  width: 9px;
  border-radius: 25px;
}
</style>