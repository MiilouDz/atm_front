<template>


 
    
    <div class="wrapper">
      <h1 id="heading relative z-5">404</h1>
      <h1 id="subheading relative z-5" class="font-tajawal">لا توجد هذه الصفحة</h1>
      <div class="button font-tajawal relative z-5">
        <a href=  "/">الذهاب للصفحة الرئيسية</a>
      </div>
      <div class="blur absolute top-0 left-0 w-full h-full bg-blur-md " ></div>
      <div id="tsparticles"></div>
    </div>



  </template>

<script setup>

// import { onMounted } from 'vue';
// import { tsParticles } from 'tsparticles';

// export default {
  // setup() {
  //   onMounted(() => {
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 50,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: { enable: true, minimumValue: 4 },
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 4,
        sync: false,
      },
    },
    life: {
      duration: {
        value: 2,
      },
      count: 1,
    },
    move: {
      angle: {
        value: 45,
        offset: 0,
      },
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.3,
      },
      speed: 4,
      direction: "top",
      random: false,
      straight: false,
      size: true,
      outModes: {
        default: "destroy",
        bottom: "none",
      },
      attract: {
        enable: false,
        distance: 500,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: false,
    },
  },
  detectRetina: true,
  background: {
    color: "#000000",
  },
  emitters: {
    direction: "top",
    rate: {
      quantity: 5,
      delay: 0.01,
    },
    size: {
      width: 100,
      height: 50,
    },
    position: {
      x: 50,
      y: 100,
    },
  },
})
// })
// }

</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@800&family=Noto+Serif+Gujarati:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
  /* overflow: hidden; */
}
#tsparticles {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(to left bottom, #121212, #180803);
}

.wrapper {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}

#heading {
  font-family: "Tajawal", sans-serif;
  color: #F44806;
  animation: animate 4s infinite;
  font-size: 130px;
}

#subheading {
  font-family: "Tajawal", sans-serif;
}

@keyframes animate {
  0% {
    color: orange;
    text-shadow:
      0 0 4px #ff00004f,
      0 0 10px #ff000091,
      0 0 20px #ff0000;
  }
  50% {
    color: red;
    text-shadow:
      0 0 4px rgba(255, 166, 0, 0.277),
      0 0 10px rgba(255, 166, 0, 0.56),
      0 0 20px orange;
  }
  100% {
    color: orange;
    text-shadow:
      0 0 4px #ff00004f,
      0 0 10px #ff000091,
      0 0 20px #ff0000;
  }
}

.button {
  background: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 80px;
  border: 1px solid rgb(255, 89, 0);
}
.button a {
  color: red;
  text-decoration: none;
  font-family: "Tajawal", sans-serif;
}

.button:hover {
  background: rgb(255, 89, 0);
}
.button a:hover {
  color: yellow;
}

</style>