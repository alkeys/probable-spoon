



<template>
  <div class="row" style="border-radius: 5px;max-width: 220px;margin: 10px;height: 5.1vh;
width: 210px" >
    <div class="flex flex-center text-center justify-center " style="padding-right: 10px" >
      <p style="padding-top: 10px">{{ texto1 }}</p>
      <input type="number" value="$" style="max-width: 50px">
    </div>
    <div  class="flex flex-center text-center justify-center " style="padding-right: 5px" >
      <p style="padding-top: 10px">{{ texto2 }}</p>
      <input type="number" value="$" style="max-width: 50px">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto1: "precio:",
      texto2: "hasta:",
      inputValue: "$"
    };
  }
};
</script>
