<template>
    <!-- <header class=" relative shadow-sm bg-gradient-to-bl from-[#15151515] to-[#16060075] bg-blur-md w-full h-max px-10"> -->
        <!-- ** Navbar - Without authentication-->
            <nav class=" justify-between items-center flex py-8 md:mx-5 lg:mx-[5%] ">
                <!--TODO ATM's logo -->
                <NuxtLink to="/">
                    <img class="w-[50px] md:w-[65px] lg:w-[80px] max-w-max cursor-pointer" src="assets\img\atmlogo.png" />
                </NuxtLink>
                <!--TODO navigation Links -->
                <ul class="hidden justify-center items-center md:flex md:mx-5">
                    <div class="md:px-4 md:py-2 lg:px-6 lg:py-4 ">
                        <NuxtLink to="/">
                            <div class="link relative w-max h-max text-white text-[16px] font-medium font-tajawal active">الرئيسية</div>
                        </NuxtLink>
                    </div>
                    <!-- TODO link + dropdown menu -->
                    <div class="md:px-4 md:py-2 lg:px-6 lg:py-4 relative">
                        <NuxtLink to="#" @click="toggleDropdown" class="flex items-center">
                            <div class="link pl-2 relative w-max h-max text-white text-[16px] font-medium font-tajawal">محتوانا</div>
                            <!-- ? flip chevron -->
                            <i :class="chevronClass"></i>
                        </NuxtLink>
                        <!-- TODO this is a dropdown menu -->
                        <div class="dropdown bg-black_atm  text-[white] absolute top-[64px] right-0 w-max h-max rounded shadow-lg z-[50] overflow-hidden border border-1 border-orange_atm" >
                            <ul v-if="isOpen" class="dropdownContainer">
                                <li v-for="option in options" :key="option" @click="selectOption(option)" class="px-3 py-4 relative hover:bg-orange_atm ">
                                    <router-link :to="getOptionRoute(option)">{{ option }}</router-link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:px-4 md:py-2 lg:px-6 lg:py-4 ">
                        <NuxtLink to="#">
                            <div class="link  relative w-max h-max text-white text-[16px] font-medium font-tajawal">شارك أفكارك</div>
                        </NuxtLink>
                    </div>
                    <div @click="toggleDropdown1" class="relative md:px-4 md:py-2 lg:px-6 lg:py-4 ">
                        <NuxtLink to="#" class="flex items-center">
                            <div class="link pl-2 relative w-max h-max text-white text-[16px] font-medium font-tajawal">من نحن</div>
                            <i :class="chevronClass1"></i>
                        </NuxtLink>
                        <!-- TODO this is a dropdown menu -->
                        <div class="dropdown bg-black_atm  text-[white] absolute top-[64px] right-0 w-max h-max rounded shadow-lg z-[50] overflow-hidden border border-1 border-orange_atm" >
                            <ul v-if="isOpen1" class="dropdownContainer">
                                <li v-for="item in items" :key="item" @click="selectOption(item)" class="px-3 py-4 relative hover:bg-orange_atm ">
                                    <router-link :to="getItemRoute(item)">{{ item }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ul>
                <!--TODO authentication's buttons -->
                <div class=" hidden justify-center items-center md:flex ">    
                    <div class="md:px-4 md:py-2 lg:px-5 lg:py-4 ">
                        <NuxtLink to="login"><div class="text-white text-[16px] font-medium font-tajawal">تسجيل دخول</div></NuxtLink>
                    </div>
                    <div class="px-5 py-4 rounded-[7px] border-2 border-white justify-center items-center flex cursor-pointer hover:border-orange_atm hover:bg-orange_atm hover:shadow-lg" style="hover{box-shadow: 0 0 25px 0 #F4480625}">
                        <NuxtLink to="signup"><div class="text-white text-[16px] font-medium font-tajawal">أنشئ حسابا</div></NuxtLink>
                    </div>
                </div>
                <!-- TODO menu icon -->
                <div class="block_menu relative ">
                    <div @click="toggleMenu" :class="{'active1' : opened}" class="menuIcon flex flex-col justify-center items-center gap-[5px] md:hidden relative w-[50px] h-[25px] cursor-pointer p-3 ">    
                        <span class="absolute w-[33px] sm:w-[37px] h-[4px] bg-[white] top-[0] rounded-md"></span>
                        <span class="absolute w-[33px] sm:w-[37px] h-[4px] bg-[white] my-2  rounded-md"></span>
                        <span class="absolute w-[33px] sm:w-[37px] h-[4px] bg-[white]  bottom-0  rounded-md"></span>
                    </div>
                    <!-- <MenuToggle /> -->
                </div>
            </nav>
</template>

<script>

    export default{
        data() {
            return {
                isOpen : false,
                options : ['سلاسل و منشورات' , 'مدونتنا', 'أسئلة شائعة', 'مبادراتنا'],
                isFlipped : false,
                isOpen1 : false,
                items : ['تعرف على المنصة'  , 'تعرف على ATM ', 'تواصل معنا'],
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
            getOptionRoute(option) {
            // Define the route path for each option
            
            switch (option) {
                case 'سلاسل و منشورات':
                return "/contentPages/TopSeries";
                case 'مدونتنا':
                return '/contentPages/OurBlog';
                case 'أسئلة شائعة':
                return "/contentPages/TopQsts";
                case 'مبادراتنا':
                return '';
                default:
                return '/';
            }
            },
            getItemRoute(item) {
            // Define the route path for each item
            switch (item) {
                case 'تعرف على المنصة':
                return "/whoPages/website";
                case 'تعرف على ATM ':
                return "/whoPages/atm";
                case 'تواصل معنا':
                return "/whoPages/contact";
                default:
                return '/';
            }
            },
        }
    }
</script>

<style>
.menuIcon.active1 span:nth-child(1){
    top: 8px;
  transform:  rotate(45deg);
  background-color: #F44806;
}
.menuIcon.active1 span:nth-child(3){
    bottom:13px;
    transform:  rotate(-45deg);
    background-color: #F44806;
}
.menuIcon.active1 span:nth-child(2){
    background-color: #F44806;
    transform:translateX(-100px);
    opacity:0;
}

i.flipped{
    transform: rotate(180deg);
    transition: all 0.3s ease;
}
.dropdown{
    transition: all 0.3s ease;
}
</style>