<!-- ** Series section in index page ** -->
<template>
    <section class="my-[120px] w-[90%] md:container mx-auto md:px-10 font-tajawal">
      <!-- ? series title group -->
      <div class="mb-3 md:p-6 flex justify-between items-center">
        <div class="sectionTitle relative w-max h-max text-xl md:text-[40px] font-medium font-tajawal mr-4">
          <h2> أشهر سلاسلنا</h2>
        </div>
        <div class="flex items-center min-w-max relative font-tajawal">
          <NuxtLink to="/contentPages/TopSeries">

         
          <button class=" hover:text-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <h6>عرض المزيد </h6>
            <i class="fa-solid fa-arrow-left w-4 h-4 mr-2"></i>
          </button>
         </NuxtLink>
        </div>
      </div>
      <!-- ? topics + group cards -->
      <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-6 xl:gap-14 relative mx-auto text-[20px]" style="/*750px*/">
          <!-- ? topics -->
          <div class="flex items-center flex-wrap h-max">
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  البرمجة </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  الأمن السيبراني </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  التصميم </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  البلوكشاين </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  الذكاء الإصطناعي </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  تطوير الويب </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  تطوير تطبيقات الهاتف </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  البلوكشاين </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  الذكاء الإصطناعي </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  تطوير الويب </div>
              <div class="px-2 py-2 hover:text-orange_atm cursor-pointer">  تطوير تطبيقات الهاتف </div>
          </div>  
          <!-- ? series cards group -->
          <div class="grid sm:grid-cols-2 gap-4">
              <NewsCardPro />
              <NewsCardPro />
          </div>  
      </div>
    </section>
</template>

<script>
</script>

<style scoped>
</style>