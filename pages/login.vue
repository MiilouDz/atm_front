<!--** Login page ** -->
<template>
  <section >
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8">
        <!-- TODO form Container -->
        <div class="my-3 flex flex-col items-center py-6 w-full bg-black_atm rounded-lg shadow-lg border border-gray_atm font-tajawal  sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <!-- ? ATM logo -->
          <a href="/" class="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-16 h-12 mr-2" src="assets\img\logo2.png" alt="logo">                                                            
          </a> 
           <!--? form inputs  -->
          <div class="p-6 space-y-4 md:space-y-6 sm:px-8 py-2">
                <h1 class="p-6 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  أهلا بك مجددا 👋،  سجل دخولك هنا لتبدأ رحلتك التقنية
                </h1>
                <!-- TODO login using facebook / google account -->
                <div class="grid grid-cols-3 gap-4">
                    <!-- ? facebook account -->
                    <div class="...">
                        <button type="button" class="text-white w-full bg-gray_atm hover:bg-orange_atm focus:white focus:outline-none font-medium rounded-lg text-[16px] px-5 py-4 text-center flex justify-center items-center me-2 mb-2">
                          <span class="hidden md:block">فايسبوك </span>
                          <svg class=" w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                          </svg>
                        </button>
                    </div>
                    <!-- ? google account -->
                    <div class="col-span-2">
                        <button type="button" class="text-white w-full bg-gray_atm hover:bg-orange_atm focus:white focus:outline-none font-medium rounded-lg text-[16px] px-5 py-4 text-center flex justify-center items-center me-2 mb-2">
                            أكمل عن طريق غوغل
                          <svg class="w-4 h-4 me-2 mx-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                              <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                          </svg>
                        </button>
                    </div>
                </div>
                <!-- TODO OR -->
                <div class="flex items-center justify-center w-full">
                  <hr class="w-[24rem] h-[0.5px] my-6 bg-white border-[0.5px] dark:bg-gray-700 rounded opacity-20">
                  <span class="absolute px-3 text-[16px] font-bold text-gray-900 -translate-x-1/2 bg-black_atm left-1/2 dark:text-white dark:bg-gray-900">أو سجل بإيميلك الخاص</span>
                </div>
                <!-- TODO login your own email -->
                <form class="space-y-4 md:space-y-6" action="#">
                    <!-- * Email input -->
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">بريدك الإلكتروني</label>
                        <input type="email" name="email" id="email" class="bg-[#353535] border border-gray-300 text-gray-900 sm:text-sm rounded-lg text-black_atm block w-full p-4 outline-none focus:border-orange_atm" placeholder="name@company.com" required="">
                    </div>
                    <!-- * Password input -->
                    <div class="relative">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة السر</label>
                        <input type="password" name="password" id="password" placeholder="أدخل كلمة مرور" class="relative bg-[#353535] border border-gray-300 text-gray-900 sm:text-sm rounded-lg text-black_atm block w-full p-4 outline-none focus:border-orange_atm" required="">
                        <i class="fa-regular fa-eye-slash absolute left-5 top-12 text-white opacity-50 cursor-pointer"></i>
                    </div>
                    <!-- TODO Login Btn -->
                    <button type="submit" style="margin: 32px 0;" class="my-[48px] w-full text-white bg-gray_atm bg-gray focus:border-orange_atm font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-gray_atm dark:hover:bg-orange_atm ">سجل دخولك</button>
                    <!-- TODO Don't have an account? Sign up here -->
                    <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                      لم يسبق لك إنشاء حساب؟  <a href="signup" class="font-medium text-primary-600 text-orange_atm hover:underline dark:text-primary-500">أنشئ حسابا</a>
                    </p>
                </form>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
   export default {
       
   }
</script>

