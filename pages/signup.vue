<template>
   <section class="bg-black dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-16 h-12 mr-2" src="assets\img\logo2.png" alt="logo">
             
      </a>
      <div class="w-full bg-black_atm rounded-lg shadow border font-tajawal border-orange_atm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                أهلا بك 👋، يمكنك إنشاء حساب 
              </h1>
              <h1 class="text-xl  text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 هنا لتبدأ رحلتك التقنية
              </h1>
              
            <div class="grid grid-cols-3 gap-4">
                <div class="...">
                    <button type="button" class="text-white w-full bg-gray_atm hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                    فايسبوك
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                    </button>
                </div>
                <div class="col-span-2">
                    <button type="button" class="text-white w-full bg-gray_atm hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 ">
                        أكمل عن طريق غوغل

                    <svg class="w-4 h-4 me-2 mx-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                    </svg>
                    </button>
                </div>
  
              
            </div>
              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-8 bg-white border-0 dark:bg-gray-700">
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-black_atm left-1/2 dark:text-white dark:bg-gray-900">أو أكمل بحسابك الخاص</span>
            </div>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الإسم الكامل</label>
                      <input type="text" name="fullname" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 text-black_atm focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black_atm dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="أدخل اسمك الكامل" required="">
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">بريدك الإلكتروني</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 text-black_atm  focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة السر</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg text-black_atm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>

               
                  <button type="submit" class="w-full text-white bg-gray_atm hover:bg-gray focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-orange dark:focus:ring-primary-800">أنشئ الحساب</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    هل سبق لك إنشاء حساب؟ <a href="#" class="font-medium text-primary-600 text-orange_atm hover:underline dark:text-primary-500">سجل دخولك</a>
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
<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #000000;
  color: #ebf4f1;
}

.logo-img {
  width: 50px; /* Adjust the width as needed */
  height: auto; /* Maintain the aspect ratio */
}

</style>
