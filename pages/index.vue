<template >
<div class="container pr-10 pl-10">




<div class="grid place-content-center mt-16 mb-16 ">
    <div class="homeTitle text-center hover:text-center mb-16">
        
        <h1 data-aos="fade-down" class="text-xl md:text-5xl font-bold mb-4 underline decoration-[#f97316] mt-6 mb-6 font-ubuntu"> Algerian Tech Makers </h1>
        <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg mb-6 font-tajawal">كل ما تريد معرفته في المجالات التقنية تجده هنا </p>
    </div>

    <SearchBar/>

    
</div>

<!-- Sections Parts -->
<SectionsHomeNewsSection/>
<SectionsHomeSeriesSection/>
<SectionsHomeQstSection/>
<SectionsHomeEventSection/>
<SectionsHomeWhoSection/>
<SectionsHomeStatsSection/>

</div>
  </template>
  
  <script>


 
    const query = ref('');

    const search = () => {
    // Implement your search logic here
    console.log('Searching for:', query.value);
    };
  </script>

  <style>

    .homeTitle{
      height: 100%;
      
      justify-content: center;
      align-items: center;
    }
    
  </style>