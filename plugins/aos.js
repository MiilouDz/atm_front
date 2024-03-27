import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.AOS = new AOS.init({ 
        duration: 1500,
        easing: 'ease-in-out'
    });
  });