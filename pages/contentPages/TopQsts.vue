<template >
    <div class="container pr-10 pl-10 ">
    
    
    
    
    <div class="grid place-content-center mt-16 mb-16 ">
        <div class="homeTitle text-center hover:text-center mb-16">
            
            <h1 data-aos="fade-down" class="text-xl md:text-5xl font-bold mb-4  mt-6 mb-6 font-ubuntu"> أسئلة شائعة</h1>
            <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg mb-6 font-tajawal">سلاسل تهمك في مختلف المجالات التقنية</p>
        </div>
    
        <SearchBar/>
    
        
    </div>
    

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
        html {
          scroll-behavior: smooth;
        }
      </style>