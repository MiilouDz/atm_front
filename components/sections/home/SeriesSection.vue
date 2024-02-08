<template>
    
    <section class="container mx-0 font-tajawal">

     <div class="container mx-auto p-2 flex justify-between">
      <div class="text-3xl text ">
            <p>أشهر سلاسلنا  </p>
          </div>
      <div class="flex items-center min-w-max relative">
        <NuxtLink to="/contentPages/topSeries">
            <button class="bg-orange_atm hover:bg-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>عرض المزيد </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          </button>
        </NuxtLink>

    </div>

     </div>

     <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="grid grid-cols-4 gap-4  ">
        
            <div>  البرمجة </div>
            <div>  الأمن السيبراني </div>
            <div>  التصميم </div>
            <div>  البلوكشاين </div>
            <div>  الذكاء الإصطناعي </div>
            <div>  تطوير الويب </div>
            <div>  تطوير تطبيقات الهاتف </div>

       </div>  
     
        <div class="grid sm:grid-cols-2 gap-8">
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