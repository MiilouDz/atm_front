<template>
    <div class="relative place-content-center mb-16">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" style="color: #00000045">
            <svg class="w-4 h-4 text-gray-100 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class=" block w-full p-4 ps-10 text-sm border outline-none rounded-lg
        bg-gray_atm-50 focus:atm-orange dark:bg-gray-700  dark:placeholder-gray-500 font-tajawal" placeholder="إبحث عما يهمك .. " required  style="color: #00000085">

        <button type="submit" class="bg-black_atm text-white_atm absolute end-2.5 bottom-2.5 focus:atm-orange focus:outline-none font-medium rounded-lg text-sm px-4 py-2 font-tajawal  hover:border-orange_atm hover:bg-orange_atm hover:shadow-lg" style="hover{box-shadow: 0 0 25px 0 #F4480625}">بحث</button>
    </div>
</template>

<script setup></script>

<style scoped></style>
