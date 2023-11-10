<script>
export default {};
</script>
<template>
  <div class="absolute w-screen h-20 flex flex-row justify-between p-16 items-center">
    <p id="me_title" class="text-white text-2xl">Sherlock</p>
    <div class="flex  flex-row-reverse items-center">
      <img id="home_header" src="../../../assets/homeback.png" alt="" class="w-16 h-16">
      <div id="chose_bar" class="flex flex-row gap-10 text-white mr-10 text-xl">
        <p>123</p>
        <p>456</p>
        <p>789</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 50%;
}

#chose_bar p {
  &:after {
    transition: width .5s;
    width: 0;
    content: "";
    display: block;
    height: 2px;
    background: deepskyblue;
  }

  &:hover:after {
    transition: width .5s;
    width: 100%;
  }
}

#me_title {
  font-family: 'Roboto', sans-serif;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: deepskyblue;
    transition: .5s ease-in-out .3s;
  }

  &:hover:after {
    transition: width .3s;
    width: 100%;
  }
}

#chose_bar {
  transition: width .5s;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-space: hidden;

  &:hover {
    transition: width .5s;
    width: 100%;
  }
}

#home_header {
  transition: transform .5s;

  &:hover {
    transform: rotate(360deg);
    transition: transform .5s ease;

    ~ #chose_bar {
      transition: width .5s;
      width: 100%;
    }
  }
}

</style>