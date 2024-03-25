<template>
  <div
    class="relative overflow-hidden shadow-lg bg-[#121212F2] rounded-xl"
    dir="rtl"
  >
    <img src="/images/cover.jpeg" alt="nasa" class="h-full" height="261px" />
    <div class="absolute bottom-0 bg-black_atm l px-2 py-4 w-full">
      <div class="font-bold text-white text-xl mb-2">دورة تعلم الألة</div>
      <div class="flex justify-between">
        <div class="flex items-center">
          <img
            class="w-10 h-10 border border-orange_atm rounded-xl mx-2"
            src="/images/avatar.jpeg"
            alt="Avatar of Jonathan Reinink"
          />
          <p class="text-white text-sm leading-none">أسماء مرابط</p>
        </div>
        <div class="flex items-right px-4 py-1">
          <button
            class="bg-transparent font-semibold py-2 px-4 border border-white text-white rounded"
          >
            عرض الدورة
          </button>
        </div>
      </div>
    </div>
    <div class="absolute top-3 left-6 flex items-right">
      <button
        class="bg-black_atm border-orange_atm border text-white rounded font-medium py-1 px-3 rounded inline-flex items-center"
      >
        <svg
          class="fill-current w-5 h-5 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g opacity="0.5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z"
                fill="#ffffff"
              ></path>
            </g>
            <path
              d="M18.875 14.1183C20.5288 15.0732 21.3558 15.5506 21.4772 16.2394C21.5076 16.4118 21.5076 16.5881 21.4772 16.7604C21.3558 17.4492 20.5288 17.9266 18.875 18.8815C17.2212 19.8363 16.3942 20.3137 15.737 20.0745C15.5725 20.0147 15.4199 19.9265 15.2858 19.814C14.75 19.3644 14.75 18.4096 14.75 16.4999C14.75 14.5902 14.75 13.6354 15.2858 13.1858C15.4199 13.0733 15.5725 12.9852 15.737 12.9253C16.3942 12.6861 17.2212 13.1635 18.875 14.1183Z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
        <span>5 فيديوهات</span>
      </button>
    </div>
  </div>
</template>
