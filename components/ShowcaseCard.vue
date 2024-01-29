<script setup lang="ts">
</script>

<template>
  <NuxtLink>
    <div class="group relative border hover:border-blue-400 transition rounded-xl overflow-hidden h-full">
      <div
        class="h-48 relative flex items-center justify-center bg-grid bg-no-repeat bg-cover"
      >
        <div
          class="blur-overlay w-full h-full absolute pointer-events-none"
        />
        <slot name="image" />
      </div>

      <div class="p-4">
        <h5 class="font-semibold">
         كل ما تريد معرفته عن البلوكشاين
        </h5>
        <div class="container mx-auto p-4 flex justify-between">
        <p class="text-sm mt-1 text-gray-400">
      ميلود مقدم 
        </p>
        <p class="text-sm mt-1 text-gray-400">
      25/01/2024
        </p>
        </div>
        

        <span
          
          class="absolute top-4 right-4 text-xs px-2 flex items-center rounded-full bg-blue-50 text-blue-400"
        >
          Blockchain
        </span>
      </div>
    </div>
  </NuxtLink>
</template>