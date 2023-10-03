




<template>
  <div class="q-pa-md" style="width: 100% ;max-width:400px">
    <div class="q-gutter-md">
      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
        class="rounded-borders bg-white text-grey-8 shadow-2"

      >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </div>
  </div>
</template>


