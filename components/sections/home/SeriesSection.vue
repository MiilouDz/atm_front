<template>
    
    <section class="container mx-0 font-tajawal">

     <div class="container mx-auto p-2 flex justify-between">
      <div class="text-3xl text ">
            <p>أشهر سلاسلنا  </p>
          </div>
      <div class="flex items-center min-w-max relative">

        <button class="bg-orange_atm hover:bg-orange_atm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>عرض المزيد </span>
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

        </button>
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