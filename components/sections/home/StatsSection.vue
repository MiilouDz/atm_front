<template>
    
    <section class="container mx-0 mt-10">
     <div >
   
    
    <!-- Left card -->
    <div class=" p-6 font-tajawal">
      <div class="grid grid-cols-3 gap-3 flex justify-center text-center">
        <div >
          <a href="#" class="block max-w-sm p-6 bg-black  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <count-up class="mb-2 text-6xl text-orange_atm font-bold tracking-tight text-gray-900 dark:text-orange_atm"
          :startVal='0' :endVal='4000' :duration="4"  >+</count-up>
          <p class="font-normal text-2xl text-gray-700 dark:text-gray-400">منشور في المنصة </p>
          </a>
        </div>
        <div >
          <a href="#" class="block max-w-sm p-6 bg-black  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <count-up class="mb-2 text-6xl text-orange_atm font-bold tracking-tight text-gray-900 dark:text-orange_atm"
          :startVal='0' :endVal='250' :duration="4" >+</count-up>
          <p class="font-normal text-2xl text-gray-700 dark:text-gray-400"> مشارك في مبادرتنا </p>
          </a>
        </div>
        <div >
          <a href="#" class="block max-w-sm p-6 bg-black  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <count-up class="mb-2 text-6xl text-orange_atm font-bold tracking-tight text-gray-900 dark:text-orange_atm"
          :startVal='0' :endVal='60000' :duration="4"  >+</count-up>

          <p class="font-normal text-2xl text-gray-700 dark:text-gray-400">متابع على مختلف المنصات </p>
          </a>
        </div>

       
    </div>
    </div>

   
  </div>
 

    </section>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'
</script>

<style scoped>

</style>