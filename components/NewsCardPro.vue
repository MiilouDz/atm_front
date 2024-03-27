<!-- ** series cards ** -->
<template dir="rtl">
    <div class="w-full relative rounded-xl bg-gray_atm overflow-hidden shadow-md">
        <!-- ? images overflow -->
        <div class="image w-max">
            <div class="overflow absolute z-[5] bg-gray_atm opacity-50"></div>
            <nuxt-img src="/images/logo2.png" alt="Cover image" class="image1 w-[95%] absolute left-[-60px] top-[0] opacity-10"/>
        </div>
        <!-- ? numbers of articles -->
        <h6 class="absolute top-4 left-2 px-2 rounded-full text-[18px] font-medium text-orange"> 5 مقالات </h6>
        <!-- ? Series Title -->
        <div class="absolute pb-5 px-3 md:px-4 bottom-0 flex flex-col justify-between inset-x-0 bg-gradient-to-t from-gray-800 ">            <!-- backdrop-filter backdrop-blur-sm -->
            <h2 class="pb-2 text-white font-semibold text-sm sm:text-base line-clamp-2"> تعرف على جديد تقنية البلوكشاين </h2>
            <div class="container mx-auto flex justify-between">
                <nuxt-link href="/"><h6> ميلود مقدم </h6></nuxt-link>
                <span> 25.01.2024 </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>