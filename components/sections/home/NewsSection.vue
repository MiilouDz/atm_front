<template>
    
    <section class="container mx-0 mb-16">
     <div class="container mx-auto p-4 flex justify-between">
      <div class="text-3xl text font-tajawal ">
            <p> آخر الأخبار التقنية </p>
          </div>
      <div class="flex items-center min-w-max relative font-tajawal">

        <button class="bg-orange_atm hover:bg-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>عرض المزيد </span>
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

        </button>
    </div>

     </div>
     <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <NewsCardPro />
      <NewsCardPro />
      <NewsCardPro />
      <NewsCardPro />
      

    </div>   

    </section>
</template>

<script>
 
</script>

<style scoped>

</style>