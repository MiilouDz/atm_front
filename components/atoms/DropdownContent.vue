<template>
   <ul v-if="isOpen" class="dropdownContainer">
        <li v-for="option in options" :key="option" @click="selectOption(option)" class="dropdownOption">
            {{ option }}
        </li>
    </ul> 
</template>

<script>
    
</script>

<style>

</style>