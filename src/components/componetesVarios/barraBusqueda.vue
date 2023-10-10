




<template>
  <div class="q-pa-md" style="max-width: 100vh;">
    <div class="q-gutter-md" style="display: flex; align-items: center;">
      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
        class="rounded-borders bg-white text-grey-8 shadow-2"
        style="flex-grow: 1;"
      >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </div>
  </div>
</template>


