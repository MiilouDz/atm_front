<template>
    
    <section class="container mx-0 mb-16 " id="content">
     <div class="container mx-auto p-4 flex justify-between">
      <div class="text-3xl text font-tajawal ">
            <p> آخر الأخبار التقنية </p>
          </div>
      <div class="flex items-center min-w-max relative font-tajawal">
        <NuxtLink to="/contentPages/LastNews">

        
        <button class="bg-orange_atm hover:bg-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>عرض المزيد </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button>
      </NuxtLink>
    </div>

     </div>
     <div class="grid sm:grid-cols-3 lg:grid-cols-3 gap-2">

      <NewsCard />
      <NewsCard />
      <NewsCard />
     
      

    </div>   

    </section>
</template>

<script>

 
</script>

<style scoped>

</style>