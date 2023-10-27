<template>
  <div class="q-pa-sm">
    <label class="text-h6" for="text-input" :style="{color:color}"
           style="margin-right: 10px;max-height: 200px;">{{ nombre }}</label>
    <q-input
      class="bg-white"
      v-model="text"
      filled
      type="textarea"
      style="resize: none; width: 100%; max-height: 200px;"
      :onchange="emitValor"
    />
  </div>
</template>


<script>
export default {
  name: "TextArea",
  props: {
    id: {
      type: String,
    }
    ,
    nombre: {
      type: String,
    }, color: {
      type: String,
    },onChanges: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    emitValor() {
      const text = this.text;
      this.onChanges(text, this.id);
    },
  },
};
</script>
