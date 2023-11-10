<script>
import HomeHeader from "@/components/HomePage/components/HomeHeader.vue";

export default {
  components: {HomeHeader}
}
</script>

<template>
  <div id="home_total" class="flex flex-col">
    <HomeHeader class="absolute top-0 z-50"/>
    <div id="welcome_screen" class="h-screen w-screen flex flex-col justify-center items-center">
      <h1 class="text-white z-50">Sherlock</h1>
      <img src="../../assets/homeback.png" alt=""
           class="blur-sm hover:blur-0 transition-all absolute  duration-1000 w-full">
      <div class="flex flex-row gap-5 z-50">
        <a href="https://github.com/Sherlocksuper" target="_blank">
          <img class="contact" src="../../assets/github.png" alt="github">
        </a>
        <img class="contact" src="../../assets/wechat.png" alt="wechat">
        <img class="contact" src="../../assets/email.png" alt="email">
      </div>
    </div>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
    <p>1231</p>
  </div>
</template>

<style scoped>
.contact {
  width: 35px;
  height: 35px;
  transition: 1s;

  &:hover {
    transition: 1s;
    transform: scale(1.2);
  }
}

h1 {
  font-family: "Brush Script MT", cursive;
  font-size: 140px;
  color: white;
  transition: 1s;

  &:hover {
    transition: 1s;
    color: transparent;
    background: linear-gradient(to right, #87cefa, #ffad06);
    background-clip: text;

    ~ img {
      filter: blur(0);
      transition: 1s;
    }
  }
}
</style>