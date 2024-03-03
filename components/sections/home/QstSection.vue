<template>
    
    <section class="container mx-0 my-[96px] font-tajawal">

     <div class="container mx-auto p-2 flex justify-between items-center">
    
      <div class="sectionTitle relative w-max h-max text-xl md:text-3xl text ">
            <p> الأسئلة الأكثر شيوعا  </p>
          </div>
      <div class="flex items-center min-w-max relative">
        <NuxtLink to="/contentPages/TopQsts">
          <button class="bg-orange_atm hover:bg-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>عرض المزيد </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        </button>

        </NuxtLink>

    </div>
  
     </div>


     <div class="flex">
         <!-- Right cards -->
    <div class="w-2/3 flex flex-col space-y-4">
      <!-- Top right card -->
      <NuxtLink to="/">
      <div class="flex-1 w-2/3 p-6">
        <div class="bg-orange_atm rounded-lg shadow-md p-4">
          <img src="/images/sidebiew.webp" alt="Top Right Card Image" class="w-full h-32 object-cover mb-4 rounded-lg">
          <div>
            <!-- Top Right Card Content -->
            <h3 class="text-lg font-semibold mb-2">السؤال ؟</h3>
            <p class="text-gray-500">نبذة عن وصف السؤال</p>
          </div>
        </div>
      </div>
    </NuxtLink>
      <!-- Bottom right card -->
      <div class="flex-1 w-2/3 p-6">
        <NuxtLink to="/">

        
        <div class="bg-orange_atm rounded-lg shadow-md p-4">
          <img src="/images/sidebiew.webp" alt="Bottom Right Card Image" class="w-full h-32 object-cover mb-4 rounded-lg">
          <div>
            <!-- Bottom Right Card Content -->
            <h3 class="text-lg font-semibold mb-2">كيف أتعلم تصميم تجربة المستخدم</h3>
            <p class="text-gray-500">نبذة عن وصف السؤال</p>
          </div>
        </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Left card -->
    <div class="w-1/2 p-6">
        <NuxtLink to="/">
      <div class="bg-orange_atm rounded-lg shadow-md p-4">
        <img src="/images/sidebiew.webp" alt="Left Card Image" class="w-full h-full object-cover mb-4 rounded-lg">
        <div>
          <!-- Left Card Content -->
          <h3 class="text-lg font-semibold mb-2">كيف أتعلم البرمجة</h3>
          <p class="text-gray-500">نبذة عن وصف السؤال</p>
        </div>
      </div>
    </NuxtLink>
    </div>

   
  </div>
 
  

    </section>
</template>

<script>

 
</script>

<style scoped>

</style>