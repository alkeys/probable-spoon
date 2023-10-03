




<template>
  <div class="q-pa-sm" >
    <label class="text-h6" for="text-input" style="margin-right: 10px;max-height: 200px;">{{ nombre }}</label>
    <q-input
      class="bg-white"
      v-model="text"
      filled
      type="textarea"
      style="resize: none; width: 100%; max-height: 200px;"
    />
  </div>
</template>


<script>
export default {
  name: "TextArea",
  props:{
    nombre:{
      type: String,
    }
  },
  data() {
    return {
      text: ""
    };
  }
};
</script>
