<!-- ** Cards of latest news ** -->
<template >
  <div class="max-w-sm bg-black_atm rounded-xl overflow-hidden shadow-lg">
    <!-- ? Card image -->
    <img class="w-full" src="/images/sidebiew.webp" alt="Article image">
    <!-- ? Card title + description -->
    <div class="px-6 py-4">
    <!-- ?Tag btn -->
    <NuxtLink class=" px-4 py-2 border border-1 border-orange_atm text-[white] text-sm rounded-md ">الذكاء الاصطناعي</NuxtLink>
    <h3 class="font-bold text-xl mb-2 mt-5"> كل ما تريد معرفته عن chatGPT</h3>
    <p class="text-gray-700 text-base">
      تطورت التكنولوجيا بشكل كبير في السنوات الأخيرة، و ظهرت معها العديد من الابتكارات و التطبيقات، إحداها ChatGPT ...
      <NuxtLink class="px-3 font-medium cursor-pointer"> اقرأ المزيد </NuxtLink> 
    </p>
    </div>
    <!-- ?Bottom card's info -->
    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
      <NuxtLink to="/" class="author flex cursor-pointer">
        <img class="w-[32px] h-[32px] rounded-md border border-1 border-orange_atm" src="/images/sidebiew.webp" alt="Auther's profile picture">
        <h6 class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">ميلود مقدم</h6>
      </NuxtLink>
      <!-- ? date -->
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">15/09/2022</span>
    </div>
  </div>
</template>
 
<script setup>

</script>
