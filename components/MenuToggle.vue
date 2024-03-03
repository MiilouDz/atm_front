<template>
    <ul class="menuBlock bg-black_atm  text-[white] absolute top-[64px] left-0 w-max[40%] h-max rounded shadow-lg z-[50] overflow-hidden border border-1 border-orange_atm">
                    <div class="px-3 py-4 relative hover:bg-orange_atm ">
                        <NuxtLink to="/">
                            <div class="link relative w-max h-max text-white text-[16px] font-medium font-tajawal active">الرئيسية</div>
                        </NuxtLink>
                    </div>
                    
                    <!-- TODO link + dropdown menu -->
                    <div class="px-3 py-4 relative hover:bg-orange_atm">
                        <NuxtLink to="/" @click="toggleDropdown" class="flex items-center">
                            <div class="link pl-2 relative w-max h-max text-white text-[16px] font-medium font-tajawal">محتوانا</div>
                            <!-- ? flip chevron -->
                            <i :class="chevronClass"></i>
                        </NuxtLink>
                        <!-- TODO this is a dropdown menu -->
                        <div class="dropdown bg-black_atm  text-[white] absolute top-[64px] right-0 w-max h-max rounded shadow-lg z-[50] overflow-hidden border border-1 border-orange_atm" >
                            <ul v-if="isOpen" class="dropdownContainer">
                                <li v-for="option in options" :key="option" @click="selectOption(option)" class="px-3 py-4 relative hover:bg-orange_atm ">
                                    {{ option }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-3 py-4 relative hover:bg-orange_atm">
                        <NuxtLink to="/">
                            <div class="link  relative w-max h-max text-white text-[16px] font-medium font-tajawal">شارك أفكارك</div>
                        </NuxtLink>
                    </div>
                    <div @click="toggleDropdown1" class="px-3 py-4 relative hover:bg-orange_atm">
                        <NuxtLink to="/" class="flex items-center">
                            <div class="link pl-2 relative w-max h-max text-white text-[16px] font-medium font-tajawal">من نحن</div>
                            <i :class="chevronClass1"></i>
                        </NuxtLink>
                        <!-- TODO this is a dropdown menu -->
                        <div class="dropdown bg-black_atm  text-[white] absolute top-[64px] right-0 w-max h-max rounded shadow-lg z-[50] overflow-hidden border border-1 border-orange_atm" >
                            <ul v-if="isOpen1" class="dropdownContainer">
                                <li v-for="item in items" :key="item" @click="selectOption(item)" class="px-3 py-4 relative hover:bg-orange_atm ">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--TODO authentication's buttons -->
                    <div class=" hidden justify-center items-center md:flex flex-col">    
                        <div class="md:px-4 md:py-2 lg:px-5 lg:py-4 ">
                            <NuxtLink to="login"><div class="text-white text-[16px] font-medium font-tajawal">تسجيل دخول</div></NuxtLink>
                        </div>
                        <div class="px-5 py-4 rounded-[7px] border-2 border-white justify-center items-center flex cursor-pointer hover:border-orange_atm hover:bg-orange_atm hover:shadow-lg" style="hover{box-shadow: 0 0 25px 0 #F4480625}">
                            <NuxtLink to="signup"><div class="text-white text-[16px] font-medium font-tajawal">أنشئ حسابا</div></NuxtLink>
                        </div>
                    </div>
                </ul>
                
</template>

<script>
    export default{
        data() {
            return {
                isOpen : false,
                options : ['سلاسل و منشورات' , 'مدونتنا', 'أسئلة شائعة', 'مبادراتنا'],
                isFlipped : false,
                isOpen1 : false,
                items : ['تعرف على المنصة'  , 'تعرف على ATM و APV', 'تواصل معنا'],
                isFlipped1 : false,
                
                //? toggleMenu 
                opened : false, 
            };
        },
        computed:{
            chevronClass(){
                return ['fa-solid', 'fa-chevron-down' , 'text-[12px]' , {'flipped' : this.isFlipped}]
            },
            chevronClass1(){
                return ['fa-solid', 'fa-chevron-down' , 'text-[12px]' , {'flipped' : this.isFlipped1}]
            }
        },
        methods: {
            toggleDropdown(){
                this.isOpen = !this.isOpen;
                this.isFlipped = !this.isFlipped;
            },
            selectOption(option){
                this.selectOption = option;
                this.isOpen = false;
            },
            toggleDropdown1(){
                this.isOpen1 = !this.isOpen1;
                this.isFlipped1 = !this.isFlipped1;
            },
            selectOption(item){
                this.selectOption = item;
                this.isOpen1 = false;
            },

            // ? toggleMenu
            toggleMenu(){
                this.opened = !this.opened;
            },
        }
    }
</script>